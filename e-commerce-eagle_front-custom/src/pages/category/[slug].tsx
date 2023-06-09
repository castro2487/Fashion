import { PageFactory } from '@factories/Page/Page.factory';
import { Seo } from '@components/atoms/Seo';
import { Region } from '@components/functional/Region/Region';

type TCategoryPageProps = {
  page: IPage;
};

export default function CategoryPage({ page }: TCategoryPageProps) {
  return (
    <>
      <Seo meta={page?.meta} />
      <Region region={page?.regions?.mainRegion} />
    </>
  );
}

export async function getServerSideProps({ params, locale }: any) {
  const { slug } = params;
  const pageFactory = new PageFactory(locale as string);
  const page = await pageFactory.getPageWithGlobal(slug);

  // TODO: Don't redirect category not found on CMS but only on Algolia
  if (!page || page?.notFound) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    };
  }

  const translations = await pageFactory.getPageTranslations(['plp']);

  return {
    props: {
      page: pageFactory.serializeObject(page),
      translations,
      revalidate: 10, // In seconds
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
