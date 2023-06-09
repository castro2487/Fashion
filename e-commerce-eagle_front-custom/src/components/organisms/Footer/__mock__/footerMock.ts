const exclusiveService = {
  image: {
    src: 'https://source.unsplash.com/random/500x400/?fashion-beauty',
    alt: 'alt',
  },
  label: 'Online Assistance',
};

export const exclusiveServices = {
  title: 'Exclusive services',
  services: [
    {
      ...exclusiveService,
      id: '1',
      linkId: '1',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
    {
      ...exclusiveService,
      id: '2',
      linkUrl: '/test',
      linkId: '2',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
    {
      ...exclusiveService,
      id: '3',
      linkId: '3',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
  ],
};

const group = {
  title: 'Customer Services',
  links: [
    {
      linkUrl: '/test',
      label: 'FAQs',
      linkDisplayName: 'FAQs',
      id: '1',
      linkId: '1',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
    {
      linkUrl: '/test',
      label: 'Track Order',
      linkDisplayName: 'Track Order',
      id: '2',
      linkId: '2',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
    {
      linkUrl: '/test',
      label: 'Register Return',
      linkDisplayName: 'Register Return',
      id: '3',
      linkId: '3',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
    {
      linkUrl: '/test',
      label: 'Store Locator',
      linkDisplayName: 'Store Locator',
      id: '4',
      linkId: '4',
      linkDisplayType: 'Category',
      linkColor: 'dark',
    },
  ],
};

const footerMock = {
  group1: { ...group, id: 'group1' },
  group2: { ...group, id: 'group2' },
  group3: { ...group, id: 'group3' },
  copyright: '© 2022 Alexander McQueen Trading Limited/Autumnpaper Limited',
  newsletterLabel: 'Subscribe to the Newsletter',
  newsletterTitle: 'Newsletter',
  countryLanguageSuffix: 'Shipping to',
  countryLanguage: {
    country: {
      triggerLabel: 'United Kingdom',
      panelTitle: 'Country/Region',
    },
    language: {
      triggerLabel: 'EN',
      panelTitle: 'Language',
    },
  },
};

export default footerMock;
