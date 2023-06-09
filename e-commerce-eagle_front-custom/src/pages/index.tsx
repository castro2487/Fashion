import { Seo } from '@components/atoms/Seo';
import { Region } from '@components/functional/Region/Region';
import { PageFactory } from '@factories/Page/Page.factory';

type THomePageProps = {
  page: IPage;
};

export default function Home({ page }: THomePageProps) {
  return (
    <>
      <Seo meta={page?.meta} />
      <Region region={page?.regions?.mainRegion} />
    </>
  );
}

export async function getServerSideProps({ locale }: any) {
  const pageFactory = new PageFactory(locale as string);
  const page = await pageFactory.getPageWithGlobal('home', true);
  const translations = await pageFactory.getPageTranslations(['home']);

  return {
    props: {
      page: pageFactory.serializeObject(page),
      translations,
    },
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
// export async function getStaticPaths() {
//   // { fallback: 'blocking' } will server-render pages on-demand if the path doesn't exist.
//   return { paths: [], fallback: 'blocking' };
// }
