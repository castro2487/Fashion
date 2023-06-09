'use client';
import React, { useState, useRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { AnimatePresence } from 'framer-motion';

import { Link } from '@atoms/Link';
import { Text } from '@atoms/Text';
import { Divider } from '@atoms/Divider';
import { Image } from '@atoms/Image';
import { CountryLanguage } from '@organisms/CountryLanguage';
import { ArrowLeft } from '@icons';

import {
  BackButton,
  CountryLanguageContainer,
  StyledContainer,
  Content,
  EditItem,
  EditList,
  ImageContainer,
  InteractiveText,
  Level1List,
  Level2Container,
  Level2Item,
  Level3Container,
  Level3List,
  Links,
  MainContent,
  NavigationButton,
  SubCategory,
} from './NavigationMobile.styles';
import { useTranslations } from '@modules/app-wrapper/scripts/contexts/translations.context';

import { NavigationContent, Level2, Level3 } from '@amq';

export const NavigationMobile = ({
  categories,
  links,
  countryLanguageProps,
}: NavigationContent) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('root');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('');
  const { t } = useTranslations();

  const updateCategory = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <StyledContainer ref={containerRef}>
      <Content>
        <AnimatePresence initial={false}>
          {activeCategory === 'root' && (
            <CountryLanguageContainer
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.2 },
              }}
              exit={{ opacity: 0 }}
            >
              <Text type="labelMedium" as="p" css={{ color: '$darkGrey' }}>
                {t('navigation.shipping')}
              </Text>
              <CountryLanguage {...countryLanguageProps} />
            </CountryLanguageContainer>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false} mode="wait">
          {activeCategory === 'root' && (
            <MainContent
              transition={{ duration: 0.2 }}
              key={'root'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Level1List>
                {categories.map(({ id, name }) => (
                  <NavigationButton
                    key={id}
                    value={id}
                    onClick={() => {
                      updateCategory(id);
                    }}
                  >
                    <Text type="h2">{name}</Text>
                  </NavigationButton>
                ))}
              </Level1List>

              <Links>
                {links.map(
                  ({
                    linkUrl,
                    linkId,
                    linkDisplayType,
                    linkDisplayName,
                    linkColor,
                  }) => (
                    <Link
                      linkUrl={linkUrl}
                      linkId={linkId}
                      linkDisplayType={linkDisplayType}
                      linkColor={linkColor}
                      underline={false}
                      key={linkUrl}
                    >
                      <Text type="labelMedium">{linkDisplayName}</Text>
                    </Link>
                  )
                )}
              </Links>
            </MainContent>
          )}

          {categories
            ? categories.map(
                ({ id, name, subcategories, listType }) =>
                  activeCategory === id && (
                    <SubCategory
                      transition={{ duration: 0.2 }}
                      key={id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <InteractiveText
                        type="h2"
                        color={activeSubcategory !== '' ? 'darkGrey' : 'black'}
                      >
                        {name}
                      </InteractiveText>
                      <Divider
                        css={{
                          width: '$space$6xl',
                          marginTop: '$xl',
                          marginBottom: '$xl',
                          color: '$mediumGrey',
                        }}
                      />
                      {listType === 'tabs' ? (
                        <Level2Container
                          type="single"
                          collapsible
                          onValueChange={(value: string) => {
                            setActiveSubcategory(value);
                          }}
                        >
                          {(subcategories as Level2[]).map(
                            ({ name, editLinks, id, ...subcategory }) => (
                              <Level2Item key={id} value={id}>
                                <Accordion.Header>
                                  <Accordion.Trigger>
                                    <InteractiveText
                                      type="h3"
                                      color={
                                        activeSubcategory === ''
                                          ? 'greyedOut'
                                          : activeSubcategory !== id
                                          ? 'darkGrey'
                                          : 'black'
                                      }
                                    >
                                      {name}
                                    </InteractiveText>
                                  </Accordion.Trigger>
                                </Accordion.Header>
                                <Level3Container>
                                  <Level3List>
                                    {subcategory.subcategories
                                      ? subcategory.subcategories.map(
                                          ({
                                            linkId,
                                            linkDisplayName,
                                            linkUrl,
                                            linkDisplayType,
                                            linkColor,
                                          }) => (
                                            <li key={linkId}>
                                              <Link
                                                linkUrl={linkUrl}
                                                underline={false}
                                                linkId={linkId}
                                                linkDisplayType={
                                                  linkDisplayType
                                                }
                                                linkColor={linkColor}
                                              >
                                                <Text type="labelMedium">
                                                  {linkDisplayName}
                                                </Text>
                                              </Link>
                                            </li>
                                          )
                                        )
                                      : null}
                                  </Level3List>
                                  {editLinks ? (
                                    <EditList
                                      padding={{
                                        '@initial': 'mobile',
                                        '@bp1': 'tablet',
                                      }}
                                    >
                                      {editLinks.map(
                                        ({
                                          linkId,
                                          linkDisplayName,
                                          linkUrl,
                                          image,
                                          linkDisplayType,
                                          linkColor,
                                        }) => (
                                          <EditItem key={linkId}>
                                            <Link
                                              linkUrl={linkUrl}
                                              underline={false}
                                              linkId={linkId}
                                              linkDisplayType={linkDisplayType}
                                              linkColor={linkColor}
                                            >
                                              <ImageContainer>
                                                {image ? (
                                                  <Image
                                                    src={image.src}
                                                    alt={linkDisplayName}
                                                  />
                                                ) : null}
                                              </ImageContainer>
                                              <Text
                                                as="p"
                                                type="labelMedium"
                                                css={{ marginTop: '$xs' }}
                                              >
                                                {linkDisplayName}
                                              </Text>
                                            </Link>
                                          </EditItem>
                                        )
                                      )}
                                    </EditList>
                                  ) : null}
                                </Level3Container>
                              </Level2Item>
                            )
                          )}
                        </Level2Container>
                      ) : (
                        <Level3List css={{ margin: 0 }}>
                          {subcategories
                            ? (subcategories as unknown as Level3[]).map(
                                ({
                                  linkId,
                                  linkDisplayName,
                                  linkUrl,
                                  linkDisplayType,
                                  linkColor,
                                }) => (
                                  <li key={linkId}>
                                    <Link
                                      linkUrl={linkUrl}
                                      underline={false}
                                      linkId={linkId}
                                      linkDisplayType={linkDisplayType}
                                      linkColor={linkColor}
                                    >
                                      <Text type="h3">{linkDisplayName}</Text>
                                    </Link>
                                  </li>
                                )
                              )
                            : null}
                        </Level3List>
                      )}
                    </SubCategory>
                  )
              )
            : null}
        </AnimatePresence>

        <AnimatePresence>
          {activeCategory !== 'root' && (
            <BackButton
              height={{
                '@initial': 'short',
                '@bp1': 'tall',
              }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                updateCategory('root');
                setActiveSubcategory('');
              }}
            >
              <ArrowLeft />
            </BackButton>
          )}
        </AnimatePresence>
      </Content>
    </StyledContainer>
  );
};
