'use client';
import React from 'react';

import { AccordionItem } from '@molecules/Accordion/AccordionItem';

import { Text } from '@atoms/Text';
import { Link } from '@atoms/Link';

import {
  Content,
  StyledContainer,
  StoreCardAccordion,
} from './StoreCard.styles';

import { StoreCardProps } from '@amq';

export const StoreCard = ({
  title,
  description,
  phoneNumber: { linkUrl, label },
  children,
  disabled,
  active,
  openingHours,
}: StoreCardProps) => (
  <StyledContainer disabled={disabled} active={active}>
    <Text type="h4">{title}</Text>
    <Text type="labelMedium" css={{ color: '$darkGrey' }}>
      {description}
      {openingHours && typeof openingHours === 'string' && openingHours}
    </Text>

    {openingHours && typeof openingHours !== 'string' && (
      <StoreCardAccordion type="single" collapsible={false}>
        <AccordionItem id={openingHours.title} title={openingHours.title}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {openingHours.items.map(({ id, text }) => (
              <Text type="labelMedium" css={{ color: '$blackGrey' }} key={id}>
                {text}
              </Text>
            ))}
          </div>
        </AccordionItem>
      </StoreCardAccordion>
    )}

    <Link
      linkDisplayType={''}
      linkId={''}
      linkColor={''}
      linkUrl={linkUrl}
      {...(disabled ? { tabIndex: -1 } : {})}
    >
      <Text
        type="labelMedium"
        css={{ textDecoration: 'underline', textUnderlineOffset: '$space$xxs' }}
      >
        {label}
      </Text>
    </Link>

    <Content>{children}</Content>
  </StyledContainer>
);
