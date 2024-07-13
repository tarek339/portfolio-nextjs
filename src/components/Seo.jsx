import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Tarek's Tech Solutions" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{pageTitle}</title>
    </Head>
  </>
);

export default SEO;
