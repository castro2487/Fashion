import * as AccordionPrimitive from '@radix-ui/react-accordion';

declare module '@amq' {
  export type AccordionPrimitiveProps = React.ComponentProps<
    typeof AccordionPrimitive.Root
  >;
  export type TAccordionProps = AccordionPrimitiveProps & CSSProps;
}
