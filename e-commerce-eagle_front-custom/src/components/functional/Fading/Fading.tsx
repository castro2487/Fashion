'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadingProps } from '@amq';

export const Fading = ({ id, children }: FadingProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
