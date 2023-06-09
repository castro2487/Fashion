'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InputMention } from '@atoms/InputMention';
import { InputErrorTypes } from './InputError.types';

export const InputError = ({ error, css }: InputErrorTypes) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{ overflow: 'hidden' }}
        >
          <InputMention css={{ ...css, color: '$red' }}>{error}</InputMention>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
