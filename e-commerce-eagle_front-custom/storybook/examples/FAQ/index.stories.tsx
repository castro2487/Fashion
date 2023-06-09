import React, { useState } from 'react';
import { styled } from '@stitches-definitions';

import { Accordion, AccordionItem } from '@molecules/Accordion';
import { Text } from '@atoms/Text';

export default {
  title: 'Examples/FAQ',
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
};

const CustomAccordionItem = styled(AccordionItem, {
  transition: 'opacity 300ms ease-in-out',

  variants: {
    colorText: {
      black: {
        '--customColor': '$colors$black',
      },
      darkGrey: {
        '--customColor': '$colors$darkGrey',
      },
      greyedOut: {
        opacity: 0.8,
      },
    },
  },
});

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Accordion type="single" value={value} onValueChange={setValue}>
        <CustomAccordionItem
          alignment="center"
          title="My Profile"
          type="h3"
          id="profile"
          divider={false}
          colorText={
            value === ''
              ? 'greyedOut'
              : value !== 'profile'
              ? 'darkGrey'
              : 'black'
          }
        >
          <Accordion type="single" css={{ padding: '$xl' }}>
            <AccordionItem
              alignment="center"
              title="What are the benefits of creating a profile?"
              id="profile-1"
            >
              <Text type="labelSmall" css={{ color: '$blackGrey' }}>
                Please contact us if you would like to cancel your profile.
              </Text>
            </AccordionItem>
            <AccordionItem
              alignment="center"
              title="What should I do if I can’t log into my profile?"
              id="profile-2"
            >
              <Text type="labelSmall" css={{ color: '$blackGrey' }}>
                Please contact us if you would like to cancel your profile.
              </Text>
            </AccordionItem>
            <AccordionItem
              alignment="center"
              title="How do I delete my profile?"
              id="profile-3"
            >
              <Text type="labelSmall" css={{ color: '$blackGrey' }}>
                Please contact us if you would like to cancel your profile.
              </Text>
            </AccordionItem>
          </Accordion>
        </CustomAccordionItem>
        <CustomAccordionItem
          alignment="center"
          title="Shopping"
          type="h3"
          id="shopping"
          divider={false}
          colorText={
            value === ''
              ? 'greyedOut'
              : value !== 'shopping'
              ? 'darkGrey'
              : 'black'
          }
        >
          Proident sint sunt irure Lorem sunt nulla cillum eu aute nostrud
          mollit. Ex ad officia labore aliquip voluptate consequat enim non.
          Esse duis do cupidatat Lorem veniam velit. Cupidatat enim minim ex
          enim. Aliquip nulla sit adipisicing et magna voluptate labore irure
          sit irure dolor cupidatat tempor. Cupidatat mollit culpa commodo irure
          excepteur culpa eiusmod enim anim fugiat.
        </CustomAccordionItem>
      </Accordion>
    </div>
  );
};
