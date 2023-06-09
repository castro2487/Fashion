'use client';
import React from 'react';

import { FooterContent } from '@amq';

import { Link } from '@atoms/Link';
import { Text } from '@atoms/Text/Text';
import { ActionSheet, ActionSheetContent } from '@molecules/ActionSheet';
import { Accordion, AccordionItem } from '@molecules/Accordion';
import { COLOR_OPTION } from '@constants/uiOptionsAndDefinition';

import { LogoStacked, ArrowRight } from '@icons';

import {
  StyledContainer,
  Links,
  Legal,
  Logo,
  NewsletterTrigger,
  CountryLanguageContainer,
} from './FooterMobile.styles';
import { CountryLanguage } from '@organisms/CountryLanguage';
import { useTranslations } from '@modules/app-wrapper/scripts/contexts/translations.context';

export const FooterMobile = ({
  group1,
  group2,
  group3,
  newsletterLabel,
  newsletterTitle,
  newsletterContent,
  copyright,
  copyrightLong,
  countryLanguageProps,
  theme,
}: FooterContent) => {
  const { t } = useTranslations();

  return (
    <StyledContainer theme={theme}>
      <ActionSheet>
        <NewsletterTrigger>
          <Text type="h4">{newsletterLabel}</Text>
          <ArrowRight role="none" />
        </NewsletterTrigger>
        {newsletterContent ? (
          <ActionSheetContent title={newsletterTitle}>
            {newsletterContent}
          </ActionSheetContent>
        ) : null}
      </ActionSheet>
      <Accordion type="single">
        {[group1, group2, group3].map(({ title, links, id }) => (
          <AccordionItem
            key={id}
            id={id}
            title={title}
            theme={theme}
            alignment="center"
            type="h4"
          >
            <Links>
              {links.map(
                ({
                  linkDisplayName,
                  linkUrl,
                  linkDisplayIcon,
                  linkId,
                  linkDisplayType,
                  linkColor,
                  linkOpenInNewTab,
                }) => (
                  <li key={linkId}>
                    <Link
                      linkUrl={linkUrl}
                      underline={false}
                      styled={
                        theme === COLOR_OPTION.DARK
                          ? COLOR_OPTION.DARK
                          : COLOR_OPTION.LIGHT
                      }
                      linkId={linkId}
                      linkDisplayType={linkDisplayType}
                      linkDisplayIcon={linkDisplayIcon}
                      linkColor={linkColor}
                      linkOpenInNewTab={linkOpenInNewTab}
                    >
                      <Text type="labelMedium">{linkDisplayName}</Text>
                    </Link>
                  </li>
                )
              )}
            </Links>
          </AccordionItem>
        ))}
      </Accordion>
      <CountryLanguageContainer>
        <Text type="h4" as="p" css={{ color: '$dark' }}>
          {t('navigation.shipping')}
        </Text>
        <CountryLanguage
          {...countryLanguageProps}
          theme={
            theme === COLOR_OPTION.DARK ? COLOR_OPTION.DARK : COLOR_OPTION.LIGHT
          }
        />
      </CountryLanguageContainer>
      <Legal copyright={copyrightLong ? 'long' : 'short'}>
        <Logo>
          <LogoStacked title="Alexander McQueen" />
        </Logo>
        <Text type="labelSmall" as="p" css={{ color: '$darkGrey' }}>
          {copyrightLong || copyright}
        </Text>
      </Legal>
    </StyledContainer>
  );
};
