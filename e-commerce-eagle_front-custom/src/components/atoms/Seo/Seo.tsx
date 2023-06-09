import Head from 'next/head';

export const Seo = ({ meta }: { meta: TPageMeta }) => {
  const { title, description, keywords, canonicals } = meta;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicals &&
          canonicals.map((canonical) => (
            <link rel="canonical" href={canonical} />
          ))}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
