import { styled } from '@stitches-definitions';
import * as Dialog from '@radix-ui/react-dialog';

export const Content = styled(Dialog.Content, {
  position: 'absolute',
  zIndex: 10,
  inset: 0,
});
