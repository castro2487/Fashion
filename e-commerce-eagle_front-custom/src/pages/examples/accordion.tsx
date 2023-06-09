import Head from 'next/head';

import { GetServerSidePropsContext } from 'next/types';

import { ContentfulHeaderFactory } from '@factories/ContentfulHeader/ContentfulHeader.factory';
import { LocaleFactory } from '@factories/Locale/Locale.factory';
import { ContentfulAccordionFactory } from '@factories/ContentfulAccordion/ContentfulAccordion.factory';

import { DynamicAccordion } from '@components/molecules/Accordion/DynamicAccordion';
import { ContentfulDynamicComponentService } from '@services/ContentfulDynamicComponent/ContentfulDynamicComponent.service';

interface IAccordionPage {
  accordionData: IContentfulAccordionData;
  secondAccordionData: IContentfulAccordionData;
}

export default function AccordionPage({
  accordionData,
  secondAccordionData,
}: IAccordionPage) {
  return (
    <>
      <Head>
        <title>Welcome to AMQ</title>
        <meta name="description" content="Welcome to AMQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: 'flex !important',
          marginTop: '100px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '700px',
            display: 'flex !important',
            flexDirection: 'column',
            marginTop: '40px',
            gap: '150px',
          }}
        >
          <DynamicAccordion dynamicAccordionData={accordionData} />
          <DynamicAccordion dynamicAccordionData={secondAccordionData} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const accordionEntryid = '4VD3hitl18j5THFBzWFknC';
  const contentfulService = new ContentfulDynamicComponentService(
    'en',
    accordionEntryid
  );
  const accordionContentfulData = await contentfulService.initialize();

  const { data: accordionData } = new ContentfulAccordionFactory(
    accordionContentfulData
  );

  const secondAccordionEntryid = '1Wdtz9eJuxebviozFXiwI9';
  const secondContentfulService = new ContentfulDynamicComponentService(
    'en',
    secondAccordionEntryid
  );
  const secondAccordionContentfulData =
    await secondContentfulService.initialize();

  const { data: secondAccordionData } = new ContentfulAccordionFactory(
    secondAccordionContentfulData
  );

  return {
    props: {
      accordionData,
      secondAccordionData,
    },
  };
}
