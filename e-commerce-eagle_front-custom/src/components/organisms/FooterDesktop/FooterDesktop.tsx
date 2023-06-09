'use client';
import React from 'react';

import { Link } from '@atoms/Link/Link';
import { Text } from '@atoms/Text/Text';
import {
  ActionSheet,
  ActionSheetContent,
} from '@molecules/ActionSheet/ActionSheet';

import { LogoHorizontal } from '@icons';
import { Icon } from '@atoms/Icon';
import { IconName } from '@functional/DynamicIconsMap';
import { COLOR_OPTION } from '@constants/uiOptionsAndDefinition';
import { FooterContent } from '@amq';

import {
  StyledContainer,
  Columns,
  Links,
  Legal,
  Logo,
  NewsletterTrigger,
  ActionsContainer,
  CountryLanguageContainer,
} from './FooterDesktop.styles';
import { CountryLanguage } from '@organisms/CountryLanguage';
import { useTranslations } from '@modules/app-wrapper/scripts/contexts/translations.context';

export const FooterDesktop = ({
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
    <StyledContainer
      padding={{
        '@initial': 'tablet',
        '@bp1': 'tablet',
        '@bp2': 'desktop',
        '@bp3': 'desktop',
      }}
      theme={theme}
    >
      <Columns>
        {[group1, group2, group3].map(({ title, links, id }) => (
          <nav key={id}>
            <Text type="h4" as="h2">
              {title}
            </Text>
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
          </nav>
        ))}
        <ActionsContainer>
          <ActionSheet>
            <NewsletterTrigger>
              <Text type="h4">{newsletterLabel}</Text>
              <Icon iconName={IconName.ArrowRight} />
            </NewsletterTrigger>
            {newsletterContent ? (
              <ActionSheetContent title={newsletterTitle}>
                {newsletterContent}
              </ActionSheetContent>
            ) : null}
          </ActionSheet>
          <CountryLanguageContainer>
            <Text type="h4" as="p" css={{ color: '$white' }}>
              {t('navigation.shipping')}
            </Text>
            <CountryLanguage
              {...countryLanguageProps}
              theme={
                theme === COLOR_OPTION.DARK
                  ? COLOR_OPTION.DARK
                  : COLOR_OPTION.LIGHT
              }
            />
          </CountryLanguageContainer>
        </ActionsContainer>
      </Columns>
      <Legal copyright={copyrightLong ? 'long' : 'short'}>
        <Logo>
          <Icon iconName={IconName.LogoHorizontal} />
        </Logo>
        <Text
          type="labelSmall"
          as="p"
          css={{ color: '$darkGrey', whiteSpace: 'pre-wrap' }}
        >
          {copyrightLong || copyright}
        </Text>
      </Legal>
    </StyledContainer>
  );
};
