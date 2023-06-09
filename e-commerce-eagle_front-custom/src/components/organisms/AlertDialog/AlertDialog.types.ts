import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ImageProps } from 'next/image';

declare module '@amq' {
  type AlertDialogContentPrimitiveProps = React.ComponentProps<
    typeof AlertDialogPrimitive.Content
  >;

  type AlertDialogContentProps = AlertDialogContentPrimitiveProps & {
    title: string;
    description: string;
    image?: ImageProps;
    css?: StichesCSS;
    actionOnPrimary: boolean;
    actionCallback: React.MouseEventHandler<HTMLButtonElement>;
    actionLabel: string;
    cancelLabel: string;
  };
}
