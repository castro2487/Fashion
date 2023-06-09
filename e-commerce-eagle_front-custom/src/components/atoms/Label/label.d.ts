import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import { StichesCSS, TextVariants } from '@amq';

declare namespace AMQ {
  type LabelProps = LabelPrimitiveProps & {
    css?: StichesCSS;
    type?: TextVariants['type'];
  };

  type LabelPrimitiveProps = React.ComponentProps<typeof LabelPrimitiveRoot>;
}
