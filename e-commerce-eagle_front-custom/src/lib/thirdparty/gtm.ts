const handleScriptLoad = () => {
  window.dataLayer = window.dataLayer || [];

  function gtmPush(args: any) {
    window.dataLayer.push(args);
  }
};

export const gtmProps = {
  src: `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_DOMAIN_ID}`,
  strategy: 'afterInteractive',
  'data-document-language': true,
  onLoad: handleScriptLoad,
  position: 'head',
};
