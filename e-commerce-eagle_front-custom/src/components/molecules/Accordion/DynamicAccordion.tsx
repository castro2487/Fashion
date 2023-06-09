import { DynamicComponentLoader } from '@components/functional/DynamicComponentLoader/DynamicComponentLoader';
import { DynamicComponent } from '@models/DynamicComponent/DynamicComponent.model';
import { Accordion } from '@molecules/Accordion/Accordion';
import { AccordionItem } from '@molecules/Accordion/AccordionItem';

export const DynamicAccordion = ({
  dynamicAccordionData,
}: TDynamicAccordionProps) => {
  if (!dynamicAccordionData) {
    return null;
  }

  const topLevelAccordionTitle = dynamicAccordionData?.title || '';
  const hasContentItems =
    dynamicAccordionData?.contentItems !== undefined &&
    dynamicAccordionData?.contentItems?.length > 0;

  return (
    <>
      {hasContentItems ? (
        <Accordion type="single">
          <AccordionItem
            id={topLevelAccordionTitle}
            title={topLevelAccordionTitle}
            alignment="center"
            divider={false}
            type="h3"
          >
            <Accordion type="single" css={{ padding: '$xl' }}>
              {dynamicAccordionData?.contentItems !== undefined &&
                dynamicAccordionData?.contentItems?.length > 0 &&
                dynamicAccordionData?.contentItems.map(
                  (accordionItem: TCommonObject) => (
                    <AccordionItem
                      key={accordionItem?.data?.title}
                      id={accordionItem?.data?.title}
                      title={accordionItem?.data?.title}
                      alignment={accordionItem?.data?.alignment}
                    >
                      {accordionItem.data?.contentItems?.map(
                        (item: DynamicComponent) => (
                          <DynamicComponentLoader
                            key={item.componentId}
                            component={item}
                          />
                        )
                      )}
                    </AccordionItem>
                  )
                )}
            </Accordion>
          </AccordionItem>
        </Accordion>
      ) : null}
    </>
  );
};
