import * as DialogPrimitive from '@radix-ui/react-dialog';

declare module '@amq' {
  interface HotspotProps
    extends React.ComponentProps<typeof DialogPrimitive.Content> {
    children: React.ReactNode;
    container?: DialogPrimitive.PortalProps['container'];
  }

  type HotspotPreventEvent =
    DialogPrimitive.DialogContentProps['onInteractOutside'];

  interface HotspotTriggerProps
    extends Omit<
      React.ComponentProps<typeof DialogPrimitive.Trigger>,
      'asChild'
    > {
    css?: StichesCSS;
  }
}
