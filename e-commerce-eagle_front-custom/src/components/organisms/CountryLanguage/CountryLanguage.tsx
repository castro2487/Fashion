'use client';
import React from 'react';

import {
  StyledContainer,
  Trigger,
  Separator,
  StyledListContainer,
  StyledCountryLink,
} from './CountryLanguage.styles';
import {
  CountryLanguageProps,
  CountryLanguagesListProps,
  CountryRegionListProps,
} from '@amq';
import { Tabs } from '@radix-ui/react-tabs';
import { TabsContent, TabsList, TabsTrigger } from '../Tabs';
import {
  ActionSheet,
  ActionSheetContent,
  ActionSheetTrigger,
} from '@molecules/ActionSheet/ActionSheet';
import { IconName } from '@functional/DynamicIconsMap';
import { Text } from '@atoms/Text/Text';
import { Icon } from '@atoms/Icon';
import { Container } from '@atoms/Container/Container';
import {
  defineCurrentLangSymbol,
  defineOptionalLanguages,
} from './CountryLanguage.utils';
import { useRouter } from 'next/router';
import { useTranslations } from '@modules/app-wrapper/scripts/contexts/translations.context';

const CountryRegionList = ({
  alignment,
  variant,
  regAndCountriesList,
  currentCountry,
}: CountryRegionListProps) => {
  const { asPath } = useRouter();
  return (
    <Tabs defaultValue="1">
      <Container margin="l" css={{}}>
        <TabsList variant={variant} alignment={alignment}>
          {regAndCountriesList &&
            regAndCountriesList.map((region, index) => (
              <TabsTrigger
                variant={variant}
                value={(index + 1).toString()}
                key={'tab_trigger_' + index}
              >
                {region.regionName}
              </TabsTrigger>
            ))}
        </TabsList>

        {regAndCountriesList &&
          regAndCountriesList.map((region, index) => (
            <TabsContent
              value={(index + 1).toString()}
              key={'tab_content_' + index}
            >
              <StyledListContainer
                display="flex"
                flexDirection="column"
                flexWrap="wrap"
              >
                {region.countries.map((item) => (
                  <StyledCountryLink
                    underline={false}
                    linkUrl={asPath}
                    locale={item.locales[0]}
                    key={'country_link_' + item.country}
                  >
                    {currentCountry.country === item.country ? (
                      <>
                        <Text type="labelMedium">{item.country}</Text>
                        <Icon iconName={IconName.Tick} />
                      </>
                    ) : (
                      <Text type="labelMedium" color="darkGrey">
                        {item.country}
                      </Text>
                    )}
                  </StyledCountryLink>
                ))}
              </StyledListContainer>
            </TabsContent>
          ))}
      </Container>
    </Tabs>
  );
};

const CountryLanguagesList = ({
  currentCountry,
  currentLanguage,
}: CountryLanguagesListProps) => {
  const optionalLanguagesList = defineOptionalLanguages(currentCountry);
  const { asPath } = useRouter();
  return (
    <Tabs defaultValue="1">
      <Container margin="l">
        {optionalLanguagesList &&
          optionalLanguagesList.map(
            (item, index) =>
              item && (
                <StyledCountryLink
                  underline={false}
                  linkUrl={asPath}
                  locale={item.link}
                  key={'country_link_' + index}
                >
                  {currentLanguage === item.link ? (
                    <>
                      <Text type="labelMedium">{item.label}</Text>
                      <Icon iconName={IconName.Tick} />
                    </>
                  ) : (
                    <Text type="labelMedium" color="darkGrey">
                      {item.label}
                    </Text>
                  )}
                </StyledCountryLink>
              )
          )}
      </Container>
    </Tabs>
  );
};

export const CountryLanguage = ({
  regAndCountriesList,
  currentCountry,
  currentLanguage,
  theme = 'light',
  ...props
}: CountryLanguageProps) => {
  const { t } = useTranslations();
  const currentLangSymbol = defineCurrentLangSymbol(currentLanguage);
  return (
    currentCountry && (
      <StyledContainer theme={theme} {...props}>
        {/* Country Sheet */}
        <ActionSheet>
          <ActionSheetTrigger asChild>
            {/* Current country CTA */}
            <Trigger styled={theme} as="button">
              <Text type="labelMedium">{currentCountry.country}</Text>
            </Trigger>
          </ActionSheetTrigger>
          {/* Country Sheet Title */}
          <ActionSheetContent title={t('navigation.country_selector')}>
            {/* Country Sheet Content */}
            <Container
              marginTop="m"
              marginRight="l"
              marginBottom="m"
              marginLeft="l"
            >
              <Text type="body" color="darkGrey">
                {t('navigation.country_description')}
              </Text>
            </Container>
            <Container
              marginTop="m"
              marginRight="l"
              marginBottom="xs"
              marginLeft="l"
            >
              <Text type="body">
                {t('navigation.now_shipping_to', currentCountry?.country)}
              </Text>
            </Container>
            <CountryRegionList
              regAndCountriesList={regAndCountriesList}
              variant={'secondary'}
              currentCountry={currentCountry}
            />
          </ActionSheetContent>
        </ActionSheet>
        <Separator />
        {/* Language Sheet */}
        <ActionSheet>
          <ActionSheetTrigger asChild>
            {/* Current language CTA */}
            <Trigger styled={theme} as="button">
              <Text type="labelMedium">{currentLangSymbol}</Text>
            </Trigger>
          </ActionSheetTrigger>
          {/* Country Sheet Title */}
          <ActionSheetContent title={t('navigation.language')}>
            {/* Country Sheet Content */}
            <Container
              marginTop="m"
              marginRight="l"
              marginBottom="m"
              marginLeft="l"
            >
              <Text type="body" color="darkGrey">
                {t('navigation.language_description')}
              </Text>
            </Container>
            <CountryLanguagesList
              currentCountry={currentCountry}
              currentLanguage={currentLanguage}
            />
          </ActionSheetContent>
        </ActionSheet>
      </StyledContainer>
    )
  );
};
