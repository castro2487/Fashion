import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import { PageFactory } from '@factories/Page/Page.factory';

export default function ProductPage({ revalidatedAt }: any) {
  const router = useRouter();
  const slug = router.query.slug;
  const title = `Welcome to product slug: ${slug}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${slug} Template`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          You are looking at product slug: {slug} which was revalidatedAt:{' '}
          {revalidatedAt}
        </h1>
      </main>
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getServerSideProps({ locale }: GetStaticPropsContext) {
  const pageFactory = new PageFactory(locale as string);
  const page = await pageFactory.getPageWithGlobal('pdp');

  // TODO: Don't redirect product not found on CMS but only on SFCC
  if (!page || page?.notFound) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    };
  }

  const translations = await pageFactory.getPageTranslations(['pdp']);

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
