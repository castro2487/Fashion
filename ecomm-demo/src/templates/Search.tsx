/* eslint-disable react/prop-types */
import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import SearchLayout from "../components/search/SearchLayout";
import Site from "../types/Site";

export const getPath: GetPath<TemplateProps> = (props) => {
  return "/search";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  props
): HeadConfig => {
  return {
    title: `Toast | Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Search: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;
  const site: Site = _site;
  const coverPhoto = site.c_coverPhotos?.find(
    (photo) => photo.name === "Home"
  )?.photo;

  return (
    <PageLayout>
      <SearchLayout
        coverPhoto={coverPhoto}
        categories={[
          { name: "Beer", slug: "/beer" },
          { name: "Wine", slug: "/wine" },
          { name: "Liquor", slug: "/liquor" },
        ]}
      />
    </PageLayout>
  );
};

export default Search;
