'use client';
import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

import { Text } from '@atoms/Text';

import { Button } from './ShopButton.styles';
import { ShopButtonProps } from './ShopButton.types';

import { Plus, Minus } from '@icons';

export const ShopButton = ({
  label,
  active,
  disabled = false,
  css,
  className,
  ...props
}: ShopButtonProps) => (
  <LayoutGroup>
    <Button
      layout
      disabled={disabled}
      css={css}
      className={className}
      initial={{ borderRadius: 16 }}
      {...props}
    >
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            layout
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
          >
            <Text
              type="labelSmall"
              as="p"
              css={{ paddingLeft: '$s', whiteSpace: 'nowrap' }}
            >
              {label}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div layout>
        <AnimatePresence>
          {active ? <Minus title="shrink" /> : <Plus title="expand" />}
        </AnimatePresence>
      </motion.div>
    </Button>
  </LayoutGroup>
);
