import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import Site from "../types/Site";
import CoverPhotoHero from "../components/CoverPhotoHero";
import BeverageCarousel from "../components/BeverageCarousel";
import { v4 as uuid } from "uuid";
import CategoryTile from "../components/CategoryTile";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    fields: [
      "c_featuredCollections.name",
      "c_featuredCollections.slug",
      "c_featuredCollections.c_associatedBeverages.primaryPhoto",
      "c_featuredCollections.c_associatedBeverages.slug",
      "c_featuredCollections.c_associatedBeverages.name",
      "c_homePhotos",
    ],
    filter: {
      entityTypes: ["ce_home"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Toast",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

const Home: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { c_homePhotos, c_featuredCollections } = document;

  return (
    <>
      <PageLayout
        header={false}
        containerCss="pt-0 h-screen max-w-none px-0 md:px-0 mx-0 "
      >
        <CoverPhotoHero coverPhotos={c_homePhotos ?? []} />
        <div className="mx-auto max-w-screen-xl px-5 py-8 md:px-14">
          <div>
            <div className="pb-4 text-2xl font-extrabold text-dark-orange">
              Shop
            </div>
            <div className="flex px-4">
              <CategoryTile title="Beer" slug="/beer" titleCss="text-2xl" />
              <CategoryTile title="Wine" slug="/wine" titleCss="text-2xl" />
              <CategoryTile title="Liquor" slug="/liquor" titleCss="text-2xl" />
            </div>
          </div>
          {c_featuredCollections &&
            c_featuredCollections.map((collection) => (
              <BeverageCarousel
                key={uuid()}
                title={collection.name}
                beverages={collection.c_associatedBeverages}
                limit={8}
                viewAllLink={collection.slug}
              />
            ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
