import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';

declare module '@amq' {
  type LabelProps = LabelPrimitiveProps & {
    css?: StichesCSS;
    type?: TextVariants['type'];
  };

  type LabelPrimitiveProps = React.ComponentProps<typeof LabelPrimitiveRoot>;
}
