import * as DialogPrimitive from '@radix-ui/react-dialog';
import { StichesCSS } from '@amq';

export type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
export type ActionSheetContentProps = DialogContentPrimitiveProps & {
  title: string;
  css?: StichesCSS;
};
