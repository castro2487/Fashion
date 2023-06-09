'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { Text } from '@atoms/Text/Text';

import {
  StyledContainer,
  Clamped,
  ButtonContainer,
  Button,
} from './CollapsibleText.styles';
import { CollapsibleTextProps } from './CollapsibleText.types';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const CollapsibleText = ({
  clampNumber = 3,
  moreLabel,
  lessLabel,
  children,
  type,
  css,
  ...props
}: CollapsibleTextProps) => {
  const [showButton, setShowButton] = useState(false);
  const [clamped, setClamped] = useState(true);
  const [ref, { height }] = useMeasure();
  const clampedRef = useRef(null);

  const onClick = () => {
    setClamped(!clamped);
  };

  useEffect(() => {
    if (!clampedRef.current || !clamped) {
      return;
    }

    const handleResize: ResizeObserverCallback = (entries) => {
      const [entry] = entries;
      setShowButton(entry.target.scrollHeight > entry.target.clientHeight);
    };

    const ro = new ResizeObserver(handleResize);

    ro.observe(clampedRef.current);

    return () => {
      ro.disconnect();
    };
  }, [clamped]);

  return (
    <StyledContainer
      {...props}
      css={{ '--defaultColor': '$colors$darkGrey', ...css }}
    >
      <motion.div
        animate={{ height }}
        transition={{ ease: 'easeInOut' }}
        style={{ overflow: 'hidden', position: 'relative' }}
      >
        <div ref={ref}>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={`${clamped}`}
            >
              {clamped ? (
                <Clamped css={{ $$clamp: clampNumber }} ref={clampedRef}>
                  <Text as="p" type={type}>
                    {children}
                  </Text>
                </Clamped>
              ) : (
                <Text as="p" type={type}>
                  {children}
                </Text>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence>
        {showButton && (
          <ButtonContainer
            key="button-container"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Button as="button" onClick={onClick}>
              <Text type="labelSmall">{clamped ? moreLabel : lessLabel}</Text>
            </Button>
          </ButtonContainer>
        )}
      </AnimatePresence>
    </StyledContainer>
  );
};
