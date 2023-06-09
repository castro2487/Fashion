'use client';
import React, { useState, useEffect, useMemo } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import { Link } from '@atoms/Link';
import { Text } from '@atoms/Text';
import { Image } from '@atoms/Image';
import { Fading } from '@functional/Fading';
import { CountryLanguage } from '@organisms/CountryLanguage';
import { NavigationContent, Level2, Level3, Level1 } from '@amq';
import { LogoHorizontal, ArrowRight } from '@icons';
import {
  LinkList,
  LinkItem,
  StyledContainer,
  ImageContainer,
  Logo,
  Content,
  CountryLanguageContainer,
  CategoryContainer,
  ButtonList,
  NavigationButton,
  StyledArrow,
  SubcategoryContainer,
  LinkListTitle,
  Links,
} from './NavigationDesktop.styles';
import { useTranslations } from '@modules/app-wrapper/scripts/contexts/translations.context';

import { BynderImageProps } from '@amq';

export const NavigationDesktop = ({
  categories,
  links,
  countryLanguageProps,
}: NavigationContent) => {
  const { t } = useTranslations();
  const [activeCategoryId, setActiveCategory] = useState(categories[0].id);
  const [activeSubcategoryId, setActiveSubcategory] = useState(
    (categories[0].subcategories[0] as Level2).id ||
      (categories[0].subcategories[0] as Level3).linkId
  );
  const [activeImage, setActiveImage] = useState({
    id:
      (categories[0].subcategories[0] as Level2).id ||
      (categories[0].subcategories[0] as Level3).linkId,
    image: categories[0].subcategories[0].image,
    lightLogo: categories[0].subcategories[0].lightLogo,
  });
  const [hoverImage, setHoverImage] = useState<null | {
    image?: BynderImageProps;
    id: string;
    lightLogo?: boolean;
  }>(null);

  const renderLinksList = useMemo(
    () =>
      function LinksList(subcategories: Level3[], asLevel2 = false) {
        return (
          <LinkList asLevel2={asLevel2}>
            {subcategories
              ? subcategories.map(
                  ({
                    linkId,
                    linkDisplayName,
                    linkUrl,
                    image,
                    lightLogo,
                    linkDisplayType,
                    linkColor,
                  }) => (
                    <LinkItem
                      key={linkId}
                      onMouseEnter={() =>
                        setHoverImage({
                          image: image,
                          id: linkId,
                          lightLogo,
                        })
                      }
                      onMouseLeave={() => setHoverImage(null)}
                    >
                      <Link
                        linkUrl={linkUrl}
                        underline={false}
                        linkId={linkId}
                        linkDisplayType={linkDisplayType}
                        linkColor={linkColor}
                      >
                        <Text
                          type={asLevel2 ? 'h4' : 'labelMedium'}
                          css={
                            asLevel2
                              ? {
                                  lineHeight:
                                    'calc($fontSizes$8 * $lineHeights$2)',
                                }
                              : {}
                          }
                        >
                          {linkDisplayName}
                        </Text>
                      </Link>
                    </LinkItem>
                  )
                )
              : null}
          </LinkList>
        );
      },
    [activeSubcategoryId]
  );

  LinkList.displayName = 'LinksList';

  const determineActiveCategoryChildId = useMemo(
    () => (activeCategoryId: string) => {
      const activeCategoryObj = categories.find((category) => {
        return category.id === activeCategoryId;
      }) as Level1;

      const activeCategoryFirstChild = activeCategoryObj.subcategories[0];

      const categoryChildId =
        (activeCategoryFirstChild as Level3).linkId ||
        (activeCategoryFirstChild as Level2).id;
      return categoryChildId;
    },
    [activeCategoryId]
  );

  useEffect(() => {
    const currentActiveCategory = categories.find(
      (item) => item.id === activeCategoryId
    );
    // set this Id to later use this subcategory image filed to change after click on category
    const categoryFirstChildId =
      determineActiveCategoryChildId(activeCategoryId);
    currentActiveCategory && setActiveSubcategory(categoryFirstChildId);
  }, [activeCategoryId]);

  useEffect(() => {
    const currentCategory = categories.find(
      (item) => item.id === activeCategoryId
    );
    if (currentCategory) {
      let currentSubcategory;
      if (currentCategory.listType === 'tabs') {
        currentSubcategory = (currentCategory.subcategories as Level2[]).find(
          (item) => item.id === activeSubcategoryId
        );
      } else {
        currentSubcategory = (
          currentCategory.subcategories as unknown as Level3[]
        ).find((item) => item.linkId === activeSubcategoryId);
      }
      currentSubcategory &&
        currentSubcategory.image &&
        setActiveImage({
          id: activeSubcategoryId,
          image: currentSubcategory.image,
          lightLogo: currentSubcategory.lightLogo,
        });
    }
  }, [activeSubcategoryId]);

  return (
    <StyledContainer>
      <ImageContainer>
        <Logo light={hoverImage?.lightLogo || activeImage.lightLogo}>
          <LogoHorizontal title="Alexander McQueen" />
        </Logo>
        <Fading id={hoverImage?.id || activeImage.id}>
          <Image
            src={hoverImage?.image?.src || activeImage.image?.src || ''}
            alt={hoverImage?.image?.alt || activeImage.image?.alt || ''}
          />
        </Fading>
      </ImageContainer>

      <Content>
        <CountryLanguageContainer>
          <Text type="labelMedium" as="p" css={{ color: '$darkGrey' }}>
            {t('navigation.shipping')}
          </Text>
          <CountryLanguage {...countryLanguageProps} />
        </CountryLanguageContainer>

        <CategoryContainer
          orientation="vertical"
          defaultValue={activeCategoryId}
          onValueChange={(value) => setActiveCategory(value)}
          value={activeCategoryId}
        >
          <ButtonList aria-label="Categories">
            {categories.map(({ id, name }) => (
              <NavigationButton
                key={id}
                value={id}
                active={id === activeCategoryId}
              >
                <Text
                  type="h3"
                  css={{ textTransform: 'uppercase', maxWidth: 140 }}
                >
                  {name}
                </Text>
                {id === activeCategoryId && (
                  <StyledArrow>
                    <ArrowRight role="none" />
                  </StyledArrow>
                )}
              </NavigationButton>
            ))}
          </ButtonList>

          {categories.map(({ id, subcategories, listType }) => {
            return (
              <Tabs.Content value={id} key={id}>
                {listType === 'tabs' ? (
                  <SubcategoryContainer
                    orientation="vertical"
                    defaultValue={activeSubcategoryId}
                    onValueChange={(value) => setActiveSubcategory(value)}
                    value={activeSubcategoryId}
                  >
                    <ButtonList aria-label="Subcategories">
                      {(subcategories as Level2[]).map(({ id, name }) => (
                        <NavigationButton
                          key={id}
                          value={id}
                          active={id === activeSubcategoryId}
                        >
                          <Text
                            type="h4"
                            css={{
                              lineHeight: 'calc($fontSizes$8 * $lineHeights$2)',
                            }}
                          >
                            {name}
                          </Text>
                          {id === activeSubcategoryId && (
                            <StyledArrow>
                              <ArrowRight role="none" />
                            </StyledArrow>
                          )}
                        </NavigationButton>
                      ))}
                    </ButtonList>
                    {(subcategories as Level2[]).map(
                      ({ id, subcategories, editLinks, editTitle }) => {
                        return (
                          <Tabs.Content value={id} key={id}>
                            {subcategories && renderLinksList(subcategories)}
                            {editLinks && editLinks.length > 0 && editTitle && (
                              <>
                                <LinkListTitle>
                                  <Text type="h4">{editTitle}</Text>
                                </LinkListTitle>
                                {renderLinksList(editLinks)}
                              </>
                            )}
                          </Tabs.Content>
                        );
                      }
                    )}
                  </SubcategoryContainer>
                ) : (
                  <div>{renderLinksList(subcategories as Level3[], true)}</div>
                )}
              </Tabs.Content>
            );
          })}
        </CategoryContainer>
        <Links>
          {links.map(
            ({
              linkId,
              linkDisplayName,
              linkDisplayType,
              linkColor,
              linkUrl,
            }) => (
              <Link
                linkUrl={linkUrl}
                key={linkId}
                underline={false}
                linkId={linkId}
                linkDisplayType={linkDisplayType}
                linkColor={linkColor}
              >
                <Text type="labelMedium">{linkDisplayName}</Text>
              </Link>
            )
          )}
        </Links>
      </Content>
    </StyledContainer>
  );
};
