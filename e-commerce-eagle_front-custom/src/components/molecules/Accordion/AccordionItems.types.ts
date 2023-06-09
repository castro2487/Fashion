import { ComponentProps } from 'react';
import { TextVariants } from '@amq';
import { StyledItem } from './Accordion.styles';

export interface AccordionItemProps
  extends Omit<ComponentProps<typeof StyledItem>, 'value'> {
  children: React.ReactNode;
  title: string;
  id: string;
  divider?: boolean;
  type?: TextVariants['type'];
  theme?: string;
  alignment?: string;
}
