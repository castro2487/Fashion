export const onOneTrustLoad = () => {
  let observer: MutationObserver | null = null;
  const callback = (): void => {
    window.focus();
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      activeElement.blur();
    }
    window.SharedEvents.emit('cookiePolicyService:displayed');
    if (observer) {
      observer.disconnect();
    }
  };

  const targetNode = document.getElementById('onetrust-banner-sdk');
  if (targetNode) {
    const config = { attributes: true, childList: true };
    observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  window.OptanonWrapper = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'OneTrustGroupsUpdated' });
    }
    window.dispatchEvent(new CustomEvent('cookiePolicyService:submit'));
  };
};

export const cookieBannerProps = {
  src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
  strategy: 'beforeInteractive',
  'data-domain-script': process.env.NEXT_PUBLIC_ONETRUST_DOMAIN_ID,
  'data-document-language': true,
  onLoad: onOneTrustLoad,
  position: 'head',
};
