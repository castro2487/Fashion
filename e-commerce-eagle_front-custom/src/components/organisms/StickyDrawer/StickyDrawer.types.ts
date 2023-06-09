import { ReactNode } from 'react';

declare module '@amq' {
  type StickyDrawerContentProps = {
    collapsedChildren: ReactNode;
    expandedChildren: ReactNode;
  };
}
