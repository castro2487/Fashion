import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { StichesCSS } from '@amq';

export interface ShopButtonProps extends ComponentProps<typeof motion.button> {
  label: string;
  active?: boolean;
  css?: StichesCSS;
  className?: string;
}
