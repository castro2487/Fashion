import {
  CURRENT_COUNTRY_PROPS_MOCK,
  CURRENT_LANG_PROPS_MOCK,
  LOCALE_CONFIG_PROPS_MOCK,
} from '@components/organisms/CountryLanguage/__mock__/countryLanguageMock';

const CategoryLink = {
  image: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Image alt',
  },
  lightLogo: false,
  link: '',
};

const EditLink = {
  image: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Image alt',
  },
  lightLogo: false,
  link: '',
};

const subListItem = {
  image: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Image alt',
  },
  lightLogo: true,
  categoryLinks: [
    { ...CategoryLink, id: '3-1a', name: 'Level 3 1a' },
    { ...CategoryLink, id: '3-2a', name: 'Level 3 2a' },
    { ...CategoryLink, id: '3-3a', name: 'Level 3 3a' },
  ],
  editTitle: 'Shop by Edit',
  editLinks: [
    { ...EditLink, id: '3-1b', name: 'Level 3 1b' },
    { ...EditLink, id: '3-2b', name: 'Level 3 2b' },
    { ...EditLink, id: '3-3b', name: 'Level 3 3b' },
  ],
};

export const items = [
  {
    id: 'w1-1',
    name: 'women',
    list: [
      {
        ...subListItem,
        editLinks: undefined,
        id: 'w2-1',
        name: 'Collections',
      },
      {
        ...subListItem,
        id: 'w2-2',
        name: 'Highlights',
        image: {
          src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
          alt: 'Image alt',
        },
        lightLogo: false,
      },
      { ...subListItem, id: 'w2-3', name: 'Ready-to-wear' },
      {
        ...subListItem,
        categoryLinks: [
          { ...CategoryLink, id: 'w3-1a', name: 'Shoulder bags' },
          { ...CategoryLink, id: 'w3-2a', name: 'Crossbody bags' },
          { ...CategoryLink, id: 'w3-3a', name: 'Top handle bags' },
          { ...CategoryLink, id: 'w3-4a', name: 'Mini bags' },
          { ...CategoryLink, id: 'w3-5a', name: 'Clutch bags' },
          { ...CategoryLink, id: 'w3-6a', name: 'View all handbags' },
        ],
        editLinks: [
          { ...EditLink, id: 'w3-1b', name: 'The Bow' },
          { ...EditLink, id: 'w3-2b', name: 'The Curve Bag' },
          { ...EditLink, id: 'w3-3b', name: 'The Jewelled Satchel' },
          { ...EditLink, id: 'w3-4b', name: 'The Four Ring Bag' },
          { ...EditLink, id: 'w3-5b', name: 'The Skull Bag' },
          { ...EditLink, id: 'w3-6b', name: 'The Story Bag' },
        ],
        id: 'w2-4',
        name: 'Handbags',
      },
      { ...subListItem, id: 'w2-5', name: 'Shoes' },
      { ...subListItem, id: 'w2-6', name: 'Accessories' },
      { ...subListItem, id: 'w2-7', name: 'Jewellery' },
      { ...subListItem, id: 'w2-8', name: 'Gifts' },
    ],
    listType: 'tabs',
  },
  {
    id: 'm1-2',
    name: 'men',
    list: [
      {
        ...subListItem,
        editLinks: undefined,
        categoryLinks: [
          { ...CategoryLink, id: 'm3-1a', name: 'Winter 2022' },
          { ...CategoryLink, id: 'm3-2a', name: 'Fall 2022' },
          { ...CategoryLink, id: 'm3-3a', name: 'Pre-fall 2022' },
        ],
        id: 'm2-1',
        name: 'Collections',
      },
      { ...subListItem, id: 'm2-2', name: 'Highlights' },
      { ...subListItem, id: 'm2-3', name: 'Ready-to-wear' },
      { ...subListItem, id: 'm2-4', name: 'Handbags' },
      { ...subListItem, id: 'm2-5', name: 'Shoes' },
      { ...subListItem, id: 'm2-6', name: 'Accessories' },
      { ...subListItem, id: 'm2-7', name: 'Jewellery' },
      { ...subListItem, id: 'm2-8', name: 'Gifts' },
    ],
    listType: 'tabs',
  },
  {
    id: 's1-3',
    name: 'world of mcqueen',
    listType: 'links',
    list: [
      { ...CategoryLink, id: 's3-1a', name: 'Stories' },
      { ...CategoryLink, id: 's3-2a', name: 'Collection Library' },
    ],
  },
];

export const categories = [
  {
    id: 'women',
    name: 'Women',
    lightLogo: false,
    listType: 'tabs',
    image: {
      src: 'https://images.ctfassets.net/08wl9bk7awgk/4LKkx3x4S0U9nrjXwDu5js/11515f96f6e68536d921f9a5887cf2d0/Medium-AMQ-21-SS-W-09-1.jpg',
      alt: 'Image alt',
    },
    subcategories: [
      {
        id: 'women-collections',
        name: 'Collections',
        image: {
          src: 'https://images.ctfassets.net/08wl9bk7awgk/4LKkx3x4S0U9nrjXwDu5js/11515f96f6e68536d921f9a5887cf2d0/Medium-AMQ-21-SS-W-09-1.jpg',
          alt: 'Image alt',
        },
        lightLogo: true,
        listType: 'links',
        subcategories: [
          {
            linkDisplayName: 'SS23 Pre Collection',
            linkType: 'Category',
            linkCategory: 'womenSs23PreCollection',
            linkUrl: 'womenSs23PreCollection',
            linkDisplayType: 'Text',
            linkId: 'SS23-Pre-Collection',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/2VaDiPeM5TtpDHxNZe3vQr/2966b15710ce8506a1a5d73f758e6c69/Large-1.jpg',
              alt: 'Image alt',
            },
            lightLogo: false,
          },
          {
            linkDisplayName: 'AW22 Collection',
            linkType: 'Category',
            linkCategory: 'aw22collection',
            linkUrl: 'aw22collection',
            linkDisplayType: 'Text',
            linkId: 'AW22-collection',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/6uwkE3dlGqRq5qcJ8gRx5B/07fcdcfadd755829410fa26c86808018/Large-PLP80.jpg',
              alt: 'Image alt',
            },
            lightLogo: false,
          },
        ],
        editTitle: 'Shop By Edit',
        editLinks: [
          {
            linkDisplayName: 'Punk',
            linkType: 'Category',
            linkCategory: 'punk',
            linkUrl: 'punk',
            linkDisplayType: 'Text',
            linkId: 'punk',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/2GYnwcktu47cPgPuKmmpdw/68a55fa9785f203d873763b0dc1e5c25/Small-METTE-9_AWS_f3_4x5.jpg',
              alt: 'Image alt',
            },
            lightLogo: false,
          },
          {
            linkDisplayName: 'Arc',
            linkType: 'Category',
            linkCategory: 'arc',
            linkUrl: 'arc',
            linkDisplayType: 'Text',
            linkId: 'arc',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/5kxonBFnAfj4DQz6lwotCi/5047f69a326e1e5cbf315835eac1e55a/Medium-GL_AMQ_Shot02_V6_FINAL.jpg',
              alt: 'Image alt',
            },
            lightLogo: false,
          },
          {
            linkDisplayName: 'Thread Slick',
            linkType: 'Category',
            linkCategory: 'threadSlick',
            linkUrl: 'threadSlick',
            linkDisplayType: 'Text',
            linkId: 'thread-slick',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/2O1zFckSKP5kQY7crbWPil/e5365b5b560dcfb6485e810658d0d03a/Large-PLP_SS23_COMMERICAL15.jpg',
              alt: 'Image alt',
            },
            lightLogo: false,
          },
          {
            linkDisplayName: 'Hybrid',
            linkType: 'Category',
            linkDisplayType: 'Text',
            linkId: 'hybrid',
            linkCategory: 'hybrid',
            linkUrl: 'hybrid',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/3DoV33tZ7MYnBjtRfe3pPJ/a94dc4d8a44e678241772fe0dcaf5212/Medium-1.jpg',
              alt: 'Image alt',
            },
            lightLogo: false,
          },
          {
            linkDisplayName: 'Sprint Runner',
            linkType: 'Category',
            linkDisplayType: 'Text',
            linkCategory: 'new-trend',
            linkId: 'sprint-runner',
            lightLogo: false,
            linkUrl: 'new-trend',
            image: {
              src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
              alt: 'Image alt',
            },
          },
        ],
      },
      {
        id: 'womenhighlights',
        name: 'Highlights',
        lightLogo: false,
        listType: 'links',
        subcategories: [
          {
            linkDisplayName: 'The Knuckle',
            linkType: 'Category',
            linkUrl: '',
            linkDisplayType: 'Text',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
              alt: 'Image alt',
            },
            linkId: 'Knuckle',
          },
          {
            linkDisplayName: 'Sprint Runner',
            linkType: 'Category',
            linkUrl: '',
            linkDisplayType: 'Text',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
              alt: 'Image alt',
            },
            linkId: 'Runner',
          },
          {
            linkDisplayName: 'Handbags',
            linkType: 'Category',
            linkUrl: '',
            linkDisplayType: 'Text',
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
              alt: 'Image alt',
            },
            linkId: 'Handbags',
          },
        ],
        editLinks: [],
      },
      {
        id: 'ready-to-wear-cat',
        name: 'Ready-to-wear',
        image: {
          src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
          alt: 'Image alt',
        },
        lightLogo: false,
        listType: 'links',
        subcategories: [
          {
            linkDisplayName: 'View all',
            linkType: 'Category',
            linkCategory: 'viewAll',
            linkUrl: 'viewAll',
            linkDisplayType: 'Text',
            linkId: 'view-all',
            lightLogo: false,
            image: {
              src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
              alt: 'Image alt',
            },
          },
        ],
        editTitle: 'Shop by Edit',
        editLinks: [],
      },
      {
        id: 'handbags-women',
        name: 'Handbags',
        lightLogo: false,
        editLinks: [],
      },
      { id: 'women-shoes', name: 'Shoes', lightLogo: false, editLinks: [] },
      {
        id: 'accessories',
        name: 'Accessories',
        lightLogo: false,
        editLinks: [],
      },
      { id: 'jewellery', name: 'jewellery', lightLogo: false, editLinks: [] },
      { id: 'gifts', name: 'Gifts', lightLogo: false, editLinks: [] },
    ],
  },
  {
    id: 'men',
    name: 'Men',
    lightLogo: false,
    listType: 'links',
    subcategories: [
      {
        linkDisplayName: 'Tailoring',
        linkType: 'Category',
        linkCategory: 'tailoring-men',
        linkUrl: 'tailoring-men',
        linkDisplayType: 'Text',
        linkId: 'tailoring',
        lightLogo: false,
        image: {
          src: 'https://images.ctfassets.net/08wl9bk7awgk/3DoV33tZ7MYnBjtRfe3pPJ/a94dc4d8a44e678241772fe0dcaf5212/Medium-1.jpg',
          alt: 'Image alt',
        },
      },
    ],
  },
  {
    id: 'world-of-mc-queen',
    name: 'World Of McQueen',
    lightLogo: false,
    listType: 'links',
    image: {
      src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
      alt: 'Image alt',
    },
    subcategories: [
      {
        linkDisplayName: 'Stories',
        linkType: 'Content Page',
        linkContentPage: 'stories',
        linkUrl: 'stories',
        linkDisplayType: 'Text',
        linkId: 'stories',
        lightLogo: false,
        image: {
          src: 'https://images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
          alt: 'Image alt!',
        },
      },
      {
        linkDisplayName: 'Collection Library',
        linkType: 'Content Page',
        linkContentPage: 'collection-library',
        linkUrl: 'collection-library',
        linkDisplayType: 'Text',
        linkId: 'collection-library',
        lightLogo: false,
      },
    ],
  },
];

export const navigationMock = {
  countryLanguageProps: {
    regAndCountriesList: LOCALE_CONFIG_PROPS_MOCK,
    currentCountry: CURRENT_COUNTRY_PROPS_MOCK,
    currentLanguage: CURRENT_LANG_PROPS_MOCK,
  },
  links: [
    {
      linkDisplayName: 'Link 1',
      linkUrl: '',
      linkId: 'link1',
      linkDisplayType: 'Text',
    },
    {
      linkDisplayName: 'Link 2',
      linkUrl: '',
      linkId: 'link2',
      linkDisplayType: 'Text',
    },
    {
      linkDisplayName: 'Link 3',
      linkUrl: '',
      linkId: 'link3',
      linkDisplayType: 'Text',
    },
    {
      linkDisplayName: 'Link 4',
      linkUrl: '',
      linkId: 'link4',
      linkDisplayType: 'Text',
    },
  ],
  categories: categories,
};

export default navigationMock;
