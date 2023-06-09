'use client';
import React, {
  useState,
  useEffect,
  PointerEventHandler,
  useCallback,
} from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  motion,
  AnimatePresence,
  useDragControls,
  DragHandlers,
  useAnimationControls,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
import { RemoveScroll } from 'react-remove-scroll';

import {
  Content,
  Overlay,
  HandleContainer,
  Handle,
} from './StickyDrawer.styles';
import { StickyDrawerContentProps } from '@amq';

const VELOCITY_THRESHOLD = 400;
const DRAG_HEIGHT = 24;

export const StickyDrawer = ({
  collapsedChildren,
  expandedChildren,
}: StickyDrawerContentProps) => {
  const [firstRender, setFirstRender] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [containerRef, { height: containerHeight }] = useMeasure();
  const [contentRef, { height: contentHeight }] = useMeasure();

  const dragControls = useDragControls();
  const animationControls = useAnimationControls();

  const onAnimationComplete = () => {
    if (firstRender) {
      setFirstRender(false);
    }
  };

  const toggleDrawer = () => {
    setIsExpanded(!isExpanded);
  };

  const onInteractOutside = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  const startDrag: PointerEventHandler<HTMLDivElement> = (event) => {
    dragControls.start(event);
  };

  const expand = useCallback(() => {
    animationControls.start({
      y: 0,
    });
  }, [animationControls]);

  const collapse = useCallback(() => {
    animationControls.start({
      y: containerHeight - contentHeight - DRAG_HEIGHT,
    });
  }, [animationControls, containerHeight, contentHeight]);

  const onDragEnd: DragHandlers['onDragEnd'] = (event, { velocity }) => {
    const halfThreshold = window.innerHeight / 2;
    const drawerTopPosition = (
      event.target as HTMLElement
    )?.getBoundingClientRect().top;
    if (Math.abs(velocity.y) >= VELOCITY_THRESHOLD) {
      if (Math.sign(velocity.y) === 1) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    } else {
      if (drawerTopPosition < halfThreshold) {
        if (isExpanded) {
          expand();
        } else {
          setIsExpanded(true);
        }
      } else {
        if (!isExpanded) {
          collapse();
        } else {
          setIsExpanded(false);
        }
      }
    }
  };

  useEffect(() => {
    if (isExpanded) {
      expand();
    } else {
      collapse();
    }
  }, [isExpanded, containerHeight, contentHeight, expand, collapse]);

  return (
    <RemoveScroll enabled={isExpanded}>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            key="overlay"
          />
        )}
      </AnimatePresence>
      <DialogPrimitive.Root open modal={false}>
        <DialogPrimitive.Portal>
          <Content
            asChild
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={onInteractOutside}
          >
            <motion.div
              drag="y"
              dragListener={false}
              dragConstraints={{ top: 0 }}
              dragElastic={{ bottom: 0 }}
              dragMomentum={false}
              dragControls={dragControls}
              onDragEnd={onDragEnd}
              ref={containerRef}
              initial={firstRender ? { y: '100%' } : false}
              animate={animationControls}
              transition={
                firstRender
                  ? {
                      ease: 'easeInOut',
                    }
                  : {
                      type: 'spring',
                      damping: 20,
                      stiffness: 100,
                    }
              }
              onAnimationComplete={onAnimationComplete}
              style={{ overflowY: isExpanded ? 'auto' : 'hidden' }}
            >
              <HandleContainer
                css={{ height: DRAG_HEIGHT }}
                onPointerDown={startDrag}
              >
                <Handle onClick={toggleDrawer} aria-label="Toggle drawer" />
              </HandleContainer>
              <AnimatePresence initial={false} mode="wait">
                {isExpanded ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="expanded"
                  >
                    {expandedChildren}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    ref={contentRef}
                    key="collapsed"
                  >
                    {collapsedChildren}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </RemoveScroll>
  );
};
