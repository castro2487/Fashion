import { GetStaticPropsContext } from 'next';
import { Seo } from '@components/atoms/Seo';
import { Region } from '@components/functional/Region/Region';
import { PageFactory } from '@factories/Page/Page.factory';

export default function ContentPage({ page }: any) {
  return (
    <>
      <Seo meta={page?.meta} />
      <Region region={page?.regions?.mainRegion} />
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getServerSideProps({
  locale,
  params,
}: GetStaticPropsContext) {
  const pageFactory = new PageFactory(locale as string);
  const page = await pageFactory.getPageWithGlobal(params?.slug as string);

  if (!page || page?.notFound) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    };
  }

  const translations = await pageFactory.getPageTranslations([
    'global',
    'navigation',
    'search',
    'footer',
    'cms',
  ]);

  return {
    props: {
      revalidatedAt: new Date().toLocaleString(),
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
