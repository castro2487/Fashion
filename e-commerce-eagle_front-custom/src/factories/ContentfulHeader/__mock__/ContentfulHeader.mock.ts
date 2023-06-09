// this model is common, raw form of header definition response from contentful
export const CONTENTFUL_HEADER_CONTENT_DATA_MOCK = {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      metadata: {
        tags: [],
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: '08wl9bk7awgk',
          },
        },
        id: '2E5ZPRIcXiupx7e6ZFl2Tm',
        type: 'Entry',
        createdAt: '2023-02-13T11:18:10.307Z',
        updatedAt: '2023-03-30T13:06:47.377Z',
        environment: {
          sys: {
            id: 'development',
            type: 'Link',
            linkType: 'Environment',
          },
        },
        revision: 13,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'header',
          },
        },
        locale: 'en',
      },
      fields: {
        internalName: 'Header',
        generalLinks: [
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2AsKKuFv5fDb0I7jdB2fh',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2HkhrEk2JFba3aqn0NLH9d',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2rwpPDtrCjAtba4u8FNELe',
            },
          },
        ],
        navigation: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '2PUDfB2yq4z1O2KEBRX4JS',
          },
        },
      },
    },
  ],
  errors: [
    {
      sys: {
        id: 'notResolvable',
        type: 'error',
      },
      details: {
        type: 'Link',
        linkType: 'Entry',
        id: '2HjiP4qFczeHNbc1xvANDl',
      },
    },
  ],
  includes: {
    Entry: [
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '14MtAClCGaCAzU2QOnsFt3',
          type: 'Entry',
          createdAt: '2023-02-27T20:18:02.364Z',
          updatedAt: '2023-02-27T20:18:02.364Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          name: 'AW22 Collection',
          categoryId: 'aw22collection',
          lightLogo: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '1I7MDej0IBA51QMyT9g3hu',
          type: 'Entry',
          createdAt: '2023-02-28T06:48:10.539Z',
          updatedAt: '2023-03-30T12:40:14.321Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Accessories',
          name: 'Accessories',
          categoryId: 'accessories',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '1Q03HTLxV0YHB9ZE9kjpDE',
          type: 'Entry',
          createdAt: '2023-02-13T11:18:57.987Z',
          updatedAt: '2023-04-05T09:41:40.229Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 7,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Ready to wear',
          name: 'Ready-to-wear',
          categoryId: 'ready-to-wear-cat',
          subcategories: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '32xNIp8aj5K5ORUYjFHUeP',
              },
            },
          ],
          editTitle: 'Shop by Edit',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '1UWVfLoYvqNq1mhaqoL0Eq',
          type: 'Entry',
          createdAt: '2023-02-13T11:25:34.632Z',
          updatedAt: '2023-04-05T06:47:04.061Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 6,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > World of McQueen',
          name: 'World Of McQueen',
          categoryId: 'world-of-mc-queen',
          subcategories: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '576wMzk0wFCmrUShv03xqd',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3FKVlN1mtGXZ6tHKwhgcfJ',
              },
            },
          ],
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2AsKKuFv5fDb0I7jdB2fh',
          type: 'Entry',
          createdAt: '2023-02-13T10:51:25.478Z',
          updatedAt: '2023-03-28T20:01:34.922Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 23,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Header > Link > Stores',
          linkDisplayName: 'Stores',
          linkId: 'stores',
          linkType: 'Content Page',
          linkCategory: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1I7MDej0IBA51QMyT9g3hu',
            },
          },
          linkContentPage: 'stores',
          linkDisplayType: 'Text',
          linkColor: 'Light',
          linkOpenInNewTab: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2HkhrEk2JFba3aqn0NLH9d',
          type: 'Entry',
          createdAt: '2023-02-13T10:57:34.028Z',
          updatedAt: '2023-03-28T20:01:26.271Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 10,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Header > Link > Account',
          linkDisplayName: 'Account',
          linkId: 'account',
          linkType: 'Category',
          linkCategory: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '14MtAClCGaCAzU2QOnsFt3',
            },
          },
          linkDisplayType: 'Text',
          linkColor: 'Light',
          linkOpenInNewTab: true,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2HyJqu4JqTFEslZr2bVPBk',
          type: 'Entry',
          createdAt: '2023-02-13T12:09:27.699Z',
          updatedAt: '2023-04-05T09:38:33.555Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 7,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Highlights',
          name: 'Highlights',
          categoryId: 'womenhighlights',
          isHotCategory: false,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2veX0sedUyS5NDlg3ELGtE',
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2PUDfB2yq4z1O2KEBRX4JS',
          type: 'Entry',
          createdAt: '2023-02-13T11:18:14.690Z',
          updatedAt: '2023-03-28T20:01:01.814Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 5,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'navigation',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Header > Navigation',
          name: 'Navigation',
          categoryItems: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6fRHUHNYQ09zCvGTozWAvT',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5CD5M9G9E0Monixho8ZWjU',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1UWVfLoYvqNq1mhaqoL0Eq',
              },
            },
          ],
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2rwpPDtrCjAtba4u8FNELe',
          type: 'Entry',
          createdAt: '2023-03-01T16:32:51.462Z',
          updatedAt: '2023-03-30T13:07:00.798Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Header > Link > Client Service',
          linkDisplayName: 'Client Service',
          linkId: 'client-service',
          linkType: 'Content Page',
          linkContentPage: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1TvBqeC13n1MgUa8WM9sPD',
            },
          },
          linkDisplayType: 'Text',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2veX0sedUyS5NDlg3ELGtE',
          type: 'Entry',
          createdAt: '2023-04-05T06:48:01.116Z',
          updatedAt: '2023-04-05T07:00:18.870Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'SECOND LEVEL CAT IMAGE',
          imageAltText: 'SECOND LEVEL CAT IMAGE',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/1207d050d30b2ad5/webimage-2233_3_20_540.png',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '32xNIp8aj5K5ORUYjFHUeP',
          type: 'Entry',
          createdAt: '2023-02-13T12:25:35.876Z',
          updatedAt: '2023-03-30T12:57:39.991Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > RTW > View all',
          linkDisplayName: 'View all',
          linkId: 'view-all',
          linkType: 'Category',
          linkCategory: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '6ucobMkVnaSDCRCHDRNmSL',
            },
          },
          linkDisplayType: 'Text',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '391Yddta2qcHiLTkuLHHTU',
          type: 'Entry',
          createdAt: '2023-03-30T12:48:36.425Z',
          updatedAt: '2023-03-30T13:00:47.581Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Bags',
          name: 'Bags',
          categoryId: 'men-bags',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '3FKVlN1mtGXZ6tHKwhgcfJ',
          type: 'Entry',
          createdAt: '2023-02-13T11:27:30.864Z',
          updatedAt: '2023-03-29T08:28:38.686Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Link: Collection Library',
          linkDisplayName: 'Collection Library',
          linkId: 'collection-library',
          linkType: 'Content Page',
          linkDisplayType: 'Text',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '3LZOH0PczgqseomGOGvkL7',
          type: 'Entry',
          createdAt: '2023-02-13T12:06:54.944Z',
          updatedAt: '2023-03-30T12:58:24.489Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Collections > AW22 Collection',
          linkDisplayName: 'AW22 Collection',
          linkId: 'AW22-collection',
          linkType: 'Category',
          linkCategory: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '14MtAClCGaCAzU2QOnsFt3',
            },
          },
          linkDisplayType: 'Text',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '3NpchNPWDfqDaaLZLxpesO',
          type: 'Entry',
          createdAt: '2023-02-28T07:01:55.478Z',
          updatedAt: '2023-03-30T13:02:19.495Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Gifts',
          name: 'Gifts',
          categoryId: 'gifts',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '3WThtse8lwRMzPR1qXn5el',
          type: 'Entry',
          createdAt: '2023-04-05T09:41:36.312Z',
          updatedAt: '2023-04-05T09:41:36.312Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Suit',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/50a680f34c90504e/webimage-Rectangle-9098.png',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '3l6M5cof3o4Ee9auNjpl5T',
          type: 'Entry',
          createdAt: '2023-04-05T06:46:30.813Z',
          updatedAt: '2023-04-05T06:46:30.813Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'FIRST LEVEL CAT IMAGE',
          imageAltText: 'FIRST LEVEL CAT IMAGE',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/299976e7d784a55c/webimage-ezgif-2.png',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '4Lzl1OQU9pgIo5DhahQfTi',
          type: 'Entry',
          createdAt: '2023-04-05T09:42:34.447Z',
          updatedAt: '2023-04-05T09:42:34.447Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Black suit',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/4aa087e2d2aa6f89/webimage-2233_3_20_576.png',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '4O5VzuEkLqi0IgCnPtFHCW',
          type: 'Entry',
          createdAt: '2023-03-30T12:48:13.905Z',
          updatedAt: '2023-03-30T13:00:42.536Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Ready-to-wear',
          name: 'Ready to Wear',
          categoryId: 'men-ready-to-wear',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '4zfWDPL0B9wPFEePOMUKI7',
          type: 'Entry',
          createdAt: '2023-02-13T12:05:49.146Z',
          updatedAt: '2023-04-05T07:26:50.328Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 9,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Collections > SS23 Pre Collection',
          linkDisplayName: 'SS23 Pre Collection',
          linkId: 'SS23-Pre-Collection',
          linkType: 'External',
          linkCategory: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5KKGtRCWQqhG5fVix0xB9u',
            },
          },
          linkDisplayType: 'Text',
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '72hO59Mf07qk9VIKiCwDTk',
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '576wMzk0wFCmrUShv03xqd',
          type: 'Entry',
          createdAt: '2023-02-13T11:26:58.456Z',
          updatedAt: '2023-03-01T17:14:05.313Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          linkDisplayName: 'Stories',
          linkId: 'stories',
          linkType: 'Content Page',
          linkContentPage: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2HjiP4qFczeHNbc1xvANDl',
            },
          },
          linkDisplayType: 'Text',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '5CD5M9G9E0Monixho8ZWjU',
          type: 'Entry',
          createdAt: '2023-02-13T11:24:49.133Z',
          updatedAt: '2023-04-05T06:46:52.992Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 11,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men',
          name: 'Men',
          categoryId: 'men',
          subcategories: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6fRki4XivHJtYl316MAV3y',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4O5VzuEkLqi0IgCnPtFHCW',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '391Yddta2qcHiLTkuLHHTU',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6ERjqNK6IbmQgdk4Il4DvZ',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '7o7ieLLfLUq486O1Szhdb4',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '7uNDkGnBqtQ8FaixZ24FLK',
              },
            },
          ],
          isHotCategory: true,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3l6M5cof3o4Ee9auNjpl5T',
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '5KKGtRCWQqhG5fVix0xB9u',
          type: 'Entry',
          createdAt: '2023-02-13T11:06:53.354Z',
          updatedAt: '2023-02-13T12:04:24.953Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 2,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          name: 'SS23 Pre Collection',
          categoryId: 'womenSs23PreCollection',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6ERjqNK6IbmQgdk4Il4DvZ',
          type: 'Entry',
          createdAt: '2023-03-30T12:48:53.815Z',
          updatedAt: '2023-03-30T13:00:53.454Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Shoes',
          name: 'Shoes',
          categoryId: 'men-shoes',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6KKPjFYj1Z1F4BaEFa2pm3',
          type: 'Entry',
          createdAt: '2023-02-28T07:01:39.877Z',
          updatedAt: '2023-03-30T13:02:12.905Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Jewellery',
          name: 'Jewellery',
          categoryId: 'jewellery',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6KyepCPxI1QoayzTLILIfJ',
          type: 'Entry',
          createdAt: '2023-02-28T06:47:56.115Z',
          updatedAt: '2023-03-30T12:39:57.275Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Shoes',
          name: 'Shoes',
          categoryId: 'women-shoes',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6fRHUHNYQ09zCvGTozWAvT',
          type: 'Entry',
          createdAt: '2023-02-13T11:24:53.451Z',
          updatedAt: '2023-04-05T06:56:58.981Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 14,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women',
          name: 'Women',
          categoryId: 'women',
          subcategories: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'Lf5LpEPZ9gTDprP9RvcnB',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2HyJqu4JqTFEslZr2bVPBk',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Q03HTLxV0YHB9ZE9kjpDE',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6tq4eFszartjnbtizant9G',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6KyepCPxI1QoayzTLILIfJ',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1I7MDej0IBA51QMyT9g3hu',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6KKPjFYj1Z1F4BaEFa2pm3',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3NpchNPWDfqDaaLZLxpesO',
              },
            },
          ],
          isHotCategory: false,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3l6M5cof3o4Ee9auNjpl5T',
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6fRki4XivHJtYl316MAV3y',
          type: 'Entry',
          createdAt: '2023-03-30T12:46:52.026Z',
          updatedAt: '2023-03-30T13:00:32.785Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 5,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Collections',
          name: 'Collections',
          categoryId: 'men-collections',
          subcategories: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4zfWDPL0B9wPFEePOMUKI7',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3LZOH0PczgqseomGOGvkL7',
              },
            },
          ],
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6tq4eFszartjnbtizant9G',
          type: 'Entry',
          createdAt: '2023-02-28T06:47:24.854Z',
          updatedAt: '2023-04-05T09:42:48.240Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 5,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Handbags',
          name: 'Handbags',
          categoryId: 'handbags-women',
          lightLogo: false,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4Lzl1OQU9pgIo5DhahQfTi',
            },
          },
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6ucobMkVnaSDCRCHDRNmSL',
          type: 'Entry',
          createdAt: '2023-02-27T20:35:28.569Z',
          updatedAt: '2023-02-27T20:35:31.694Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 2,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          name: 'View all',
          categoryId: 'viewAll',
          lightLogo: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '72hO59Mf07qk9VIKiCwDTk',
          type: 'Entry',
          createdAt: '2023-04-05T07:26:45.746Z',
          updatedAt: '2023-04-05T07:26:45.746Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Lady with red bag',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '7o7ieLLfLUq486O1Szhdb4',
          type: 'Entry',
          createdAt: '2023-03-30T12:49:28.078Z',
          updatedAt: '2023-03-30T13:01:00.085Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Accessories',
          name: 'Accessories',
          categoryId: 'men-accessories',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '7uNDkGnBqtQ8FaixZ24FLK',
          type: 'Entry',
          createdAt: '2023-03-30T12:49:46.406Z',
          updatedAt: '2023-03-30T13:01:12.490Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Jewellery',
          name: 'Jewellery',
          categoryId: 'men-jewellery',
          lightLogo: false,
          isHotCategory: false,
        },
      },
      {
        metadata: {
          tags: [
            {
              sys: {
                type: 'Link',
                linkType: 'Tag',
                id: 'CG_employee_Customers',
              },
            },
          ],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: 'Lf5LpEPZ9gTDprP9RvcnB',
          type: 'Entry',
          createdAt: '2023-02-13T11:06:51.020Z',
          updatedAt: '2023-04-05T09:38:49.129Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 11,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'category',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Women > Collections',
          name: 'Collections',
          categoryId: 'women-collections',
          subcategories: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4zfWDPL0B9wPFEePOMUKI7',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3LZOH0PczgqseomGOGvkL7',
              },
            },
          ],
          editTitle: 'Shop By Edit',
          lightLogo: true,
          isHotCategory: true,
          associatedProductIds: '4844444,78777878,787787,78787877,7877787',
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2veX0sedUyS5NDlg3ELGtE',
            },
          },
        },
      },
    ],
    Asset: [
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '1h1aUWQJ6POYqmlokoY7bZ',
          type: 'Asset',
          createdAt: '2023-02-13T12:28:42.839Z',
          updatedAt: '2023-02-13T12:28:42.839Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en',
        },
        fields: {
          title: 'Large-PLP52',
          description: '',
          file: {
            url: '',
            details: {
              size: 393863,
              image: {
                width: 1650,
                height: 2200,
              },
            },
            fileName: 'Large-PLP52.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2GYnwcktu47cPgPuKmmpdw',
          type: 'Asset',
          createdAt: '2023-02-28T07:07:52.377Z',
          updatedAt: '2023-02-28T07:07:52.377Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en',
        },
        fields: {
          title: 'Small-METTE-9 AWS f3 4x5',
          description: '',
          file: {
            url: '',
            details: {
              size: 28947,
              image: {
                width: 560,
                height: 700,
              },
            },
            fileName: 'Small-METTE-9_AWS_f3_4x5.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2O1zFckSKP5kQY7crbWPil',
          type: 'Asset',
          createdAt: '2023-02-28T07:08:56.782Z',
          updatedAt: '2023-02-28T07:08:56.782Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en',
        },
        fields: {
          title: 'Large-PLP SS23 COMMERICAL15',
          description: '',
          file: {
            url: '//images.ctfassets.net/08wl9bk7awgk/2O1zFckSKP5kQY7crbWPil/e5365b5b560dcfb6485e810658d0d03a/Large-PLP_SS23_COMMERICAL15.jpg',
            details: {
              size: 367923,
              image: {
                width: 1650,
                height: 2200,
              },
            },
            fileName: 'Large-PLP SS23 COMMERICAL15.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '2VaDiPeM5TtpDHxNZe3vQr',
          type: 'Asset',
          createdAt: '2023-02-28T07:04:34.823Z',
          updatedAt: '2023-02-28T07:04:34.823Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en',
        },
        fields: {
          title: 'Large-1',
          description: '',
          file: {
            url: '//images.ctfassets.net/08wl9bk7awgk/2VaDiPeM5TtpDHxNZe3vQr/2966b15710ce8506a1a5d73f758e6c69/Large-1.jpg',
            details: {
              size: 170233,
              image: {
                width: 1650,
                height: 2200,
              },
            },
            fileName: 'Large-1.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '3DoV33tZ7MYnBjtRfe3pPJ',
          type: 'Asset',
          createdAt: '2023-02-28T07:11:20.054Z',
          updatedAt: '2023-02-28T07:11:20.054Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en',
        },
        fields: {
          title: 'Medium-1',
          description: '',
          file: {
            url: '//images.ctfassets.net/08wl9bk7awgk/3DoV33tZ7MYnBjtRfe3pPJ/a94dc4d8a44e678241772fe0dcaf5212/Medium-1.jpg',
            details: {
              size: 93536,
              image: {
                width: 880,
                height: 1100,
              },
            },
            fileName: 'Medium-1.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '08wl9bk7awgk',
            },
          },
          id: '6uwkE3dlGqRq5qcJ8gRx5B',
          type: 'Asset',
          createdAt: '2023-02-28T07:05:14.293Z',
          updatedAt: '2023-02-28T07:05:14.293Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en',
        },
        fields: {
          title: 'Large-PLP80',
          description: '',
          file: {
            url: '//images.ctfassets.net/08wl9bk7awgk/6uwkE3dlGqRq5qcJ8gRx5B/07fcdcfadd755829410fa26c86808018/Large-PLP80.jpg',
            details: {
              size: 348766,
              image: {
                width: 1650,
                height: 2200,
              },
            },
            fileName: 'Large-PLP80.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    ],
  },
};

export const AMQ_HEADER_PROPS_MOCK = {
  links: [
    {
      linkCategory: 'accessories',
      linkColor: 'Light',
      linkDisplayName: 'Stores',
      linkDisplayType: 'Text',
      linkType: 'Content Page',
      linkOpenInNewTab: false,
      linkContentPage: 'stories',
      linkId: 'stores',
      linkUrl: 'stories',
    },
    {
      linkCategory: 'aw22collection',
      linkColor: 'Light',
      linkDisplayName: 'Account',
      linkDisplayType: 'Text',
      linkId: 'account',
      linkOpenInNewTab: true,
      linkType: 'Category',
      linkUrl: 'aw22collection',
    },
    {
      linkContentPage: 'client-service',
      linkDisplayName: 'Client Service',
      linkDisplayType: 'Text',
      linkId: 'client-service',
      linkType: 'Content Page',
      linkUrl: 'client-service',
    },
  ],
  navigation: {
    categories: [
      {
        id: 'women',
        image:
          'https://amq-sandbox.getbynder.com/m/299976e7d784a55c/webimage-ezgif-2.png',
        lightLogo: false,
        listType: 'tabs',
        name: 'Women',
        subcategories: [
          {
            editLinks: [],
            editTitle: 'Shop By Edit',
            id: 'women-collections',
            image:
              'https://amq-sandbox.getbynder.com/m/1207d050d30b2ad5/webimage-2233_3_20_540.png',
            lightLogo: true,
            listType: 'links',
            name: 'Collections',
            subcategories: [
              {
                image:
                  'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
                lightLogo: false,
                linkCategory: 'womenSs23PreCollection',
                linkDisplayName: 'SS23 Pre Collection',
                linkDisplayType: 'Text',
                linkId: 'SS23-Pre-Collection',
                linkType: 'External',
                linkUrl: '',
              },
              {
                lightLogo: false,
                linkCategory: 'aw22collection',
                linkDisplayName: 'AW22 Collection',
                linkDisplayType: 'Text',
                linkId: 'AW22-collection',
                linkType: 'Category',
                linkUrl: 'aw22collection',
              },
            ],
          },
          {
            editLinks: [],
            id: 'womenhighlights',
            image:
              'https://amq-sandbox.getbynder.com/m/1207d050d30b2ad5/webimage-2233_3_20_540.png',
            lightLogo: false,
            name: 'Highlights',
          },
          {
            editLinks: [],
            editTitle: 'Shop by Edit',
            id: 'ready-to-wear-cat',
            image:
              'https://amq-sandbox.getbynder.com/m/50a680f34c90504e/webimage-Rectangle-9098.png',
            lightLogo: false,
            listType: 'links',
            name: 'Ready-to-wear',
            subcategories: [
              {
                lightLogo: false,
                linkCategory: 'viewAll',
                linkDisplayName: 'View all',
                linkDisplayType: 'Text',
                linkId: 'view-all',
                linkType: 'Category',
                linkUrl: 'viewAll',
              },
            ],
          },
          {
            editLinks: [],
            id: 'handbags-women',
            image:
              'https://amq-sandbox.getbynder.com/m/4aa087e2d2aa6f89/webimage-2233_3_20_576.png',
            lightLogo: false,
            name: 'Handbags',
          },
          {
            editLinks: [],
            id: 'women-shoes',
            lightLogo: false,
            name: 'Shoes',
          },
          {
            editLinks: [],
            id: 'accessories',
            lightLogo: false,
            name: 'Accessories',
          },
          {
            editLinks: [],
            id: 'jewellery',
            lightLogo: false,
            name: 'Jewellery',
          },
          {
            editLinks: [],
            id: 'gifts',
            lightLogo: false,
            name: 'Gifts',
          },
        ],
      },
      {
        id: 'men',
        image:
          'https://amq-sandbox.getbynder.com/m/299976e7d784a55c/webimage-ezgif-2.png',
        lightLogo: false,
        listType: 'tabs',
        name: 'Men',
        subcategories: [
          {
            editLinks: [],
            id: 'men-collections',
            lightLogo: false,
            listType: 'links',
            name: 'Collections',
            subcategories: [
              {
                image:
                  'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
                lightLogo: false,
                linkCategory: 'womenSs23PreCollection',
                linkDisplayName: 'SS23 Pre Collection',
                linkDisplayType: 'Text',
                linkId: 'SS23-Pre-Collection',
                linkType: 'External',
                linkUrl: '',
              },
              {
                lightLogo: false,
                linkCategory: 'aw22collection',
                linkDisplayName: 'AW22 Collection',
                linkDisplayType: 'Text',
                linkId: 'AW22-collection',
                linkType: 'Category',
                linkUrl: 'aw22collection',
              },
            ],
          },
          {
            editLinks: [],
            id: 'men-ready-to-wear',
            lightLogo: false,
            name: 'Ready to Wear',
          },
          {
            editLinks: [],
            id: 'men-bags',
            lightLogo: false,
            name: 'Bags',
          },
          {
            editLinks: [],
            id: 'men-shoes',
            lightLogo: false,
            name: 'Shoes',
          },
          {
            editLinks: [],
            id: 'men-accessories',
            lightLogo: false,
            name: 'Accessories',
          },
          {
            editLinks: [],
            id: 'men-jewellery',
            lightLogo: false,
            name: 'Jewellery',
          },
        ],
      },
      {
        id: 'world-of-mc-queen',
        image:
          'https://amq-sandbox.getbynder.com/m/299976e7d784a55c/webimage-ezgif-2.png',
        lightLogo: false,
        listType: 'links',
        name: 'World Of McQueen',
        subcategories: [
          {
            lightLogo: false,
            linkDisplayName: 'Stories',
            linkDisplayType: 'Text',
            linkId: 'stories',
            linkType: 'Content Page',
            linkUrl: '',
          },
          {
            lightLogo: false,
            linkDisplayName: 'Collection Library',
            linkDisplayType: 'Text',
            linkId: 'collection-library',
            linkType: 'Content Page',
            linkUrl: '',
          },
        ],
      },
    ],
  },
};

export const HEADER_MOCK = {
  navigation: {
    links: [
      {
        linkDisplayName: 'Stores',
        linkType: 'Content Page',
        linkCategory: 'accessories',
        linkContentPage: 'stories',
        linkUrl: 'stories',
        linkDisplayType: 'Text',
        linkId: 'stores',
        linkColor: 'Light',
        linkOpenInNewTab: false,
        image: {},
      },
      {
        linkDisplayName: 'Account',
        linkType: 'Category',
        linkCategory: 'aw22collection',
        linkUrl: 'aw22collection',
        linkDisplayType: 'Text',
        linkId: 'account',
        linkColor: 'Light',
        linkOpenInNewTab: true,
        image: {},
      },
      {
        linkDisplayName: 'Client Service',
        linkType: 'Content Page',
        linkContentPage: 'client-service',
        linkUrl: 'client-service',
        linkDisplayType: 'Text',
        linkId: 'client-service',
        image: {},
      },
    ],
    categories: [
      {
        id: 'women',
        name: 'Women',
        image: {
          src: 'https://amq-sandbox.getbynder.com/m/76cfa0bfcf546ef7/webimage-5577134B57Q1074_R.png',
          alt: 'FIRST LEVEL CAT IMAGE',
        },
        lightLogo: false,
        listType: 'tabs',
        subcategories: [
          {
            id: 'women-collections',
            name: 'Collections',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/3f46d1bb86994048/webimage-Rectangle-8789-2.png',
              alt: 'SECOND LEVEL CAT IMAGE',
            },
            lightLogo: true,
            listType: 'links',
            subcategories: [
              {
                linkDisplayName: 'SS23 Pre Collection',
                linkType: 'External',
                linkCategory: 'womenSs23PreCollection',
                linkUrl: '',
                linkDisplayType: 'Text',
                linkId: 'SS23-Pre-Collection',
                image: {
                  src: 'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
                },
              },
              {
                linkDisplayName: 'AW22 Collection',
                linkType: 'Category',
                linkCategory: 'aw22collection',
                linkUrl: 'aw22collection',
                linkDisplayType: 'Text',
                linkId: 'AW22-collection',
                image: {},
              },
            ],
            editTitle: 'Shop By Edit',
            editLinks: [
              {
                linkDisplayName: 'EDIT LINK',
                linkType: 'Content Page',
                linkContentPage: 'stories',
                linkUrl: 'stories',
                linkDisplayType: 'Text',
                linkId: 'edit-link',
                image: {
                  src: 'https://amq-sandbox.getbynder.com/m/e2208a91a217993/webimage-011559.png',
                  alt: 'Black suit',
                },
              },
            ],
          },
          {
            id: 'womenhighlights',
            name: 'Highlights',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/3f46d1bb86994048/webimage-Rectangle-8789-2.png',
              alt: 'SECOND LEVEL CAT IMAGE',
            },
            lightLogo: false,
          },
          {
            id: 'ready-to-wear-cat',
            name: 'Ready-to-wear',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/7281fa5a79712d28/webimage-Rectangle-8789-4.png',
              alt: 'Suit men',
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
                image: {},
              },
            ],
            editTitle: 'Shop by Edit',
          },
          {
            id: 'handbags-women',
            name: 'Handbags',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/e2208a91a217993/webimage-011559.png',
              alt: 'Black suit',
            },
            lightLogo: false,
          },
          {
            id: 'women-shoes',
            name: 'Shoes',
            image: {},
            lightLogo: false,
          },
          {
            id: 'accessories',
            name: 'Accessories',
            image: {},
            lightLogo: false,
          },
          {
            id: 'jewellery',
            name: 'Jewellery',
            image: {},
            lightLogo: false,
          },
          {
            id: 'gifts',
            name: 'Gifts',
            image: {},
            lightLogo: false,
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        image: {
          src: 'https://amq-sandbox.getbynder.com/m/76cfa0bfcf546ef7/webimage-5577134B57Q1074_R.png',
          alt: 'FIRST LEVEL CAT IMAGE',
        },
        lightLogo: true,
        listType: 'tabs',
        subcategories: [
          {
            id: 'men-collections',
            name: 'Collections',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/7281fa5a79712d28/webimage-Rectangle-8789-4.png',
              alt: 'Suit men',
            },
            lightLogo: true,
            listType: 'links',
            subcategories: [
              {
                linkDisplayName: 'SS23 Pre Collection',
                linkType: 'External',
                linkCategory: 'womenSs23PreCollection',
                linkUrl: '',
                linkDisplayType: 'Text',
                linkId: 'SS23-Pre-Collection',
                image: {
                  src: 'https://amq-sandbox.getbynder.com/m/77558f9d9b9c9ce7/webimage-image-1.png',
                },
              },
              {
                linkDisplayName: 'AW22 Collection',
                linkType: 'Category',
                linkCategory: 'aw22collection',
                linkUrl: 'aw22collection',
                linkDisplayType: 'Text',
                linkId: 'AW22-collection',
                image: {},
              },
            ],
          },
          {
            id: 'men-ready-to-wear',
            name: 'Ready to Wear',
            image: {},
            lightLogo: false,
          },
          {
            id: 'men-bags',
            name: 'Bags',
            image: {},
            lightLogo: false,
          },
          {
            id: 'men-shoes',
            name: 'Shoes',
            image: {},
            lightLogo: false,
          },
          {
            id: 'men-accessories',
            name: 'Accessories',
            image: {},
            lightLogo: false,
          },
          {
            id: 'men-jewellery',
            name: 'Jewellery',
            image: {},
            lightLogo: false,
          },
        ],
      },
      {
        id: 'world-of-mc-queen',
        name: 'World Of McQueen',
        image: {
          src: 'https://amq-sandbox.getbynder.com/m/76cfa0bfcf546ef7/webimage-5577134B57Q1074_R.png',
          alt: 'FIRST LEVEL CAT IMAGE',
        },
        lightLogo: false,
        listType: 'links',
        subcategories: [
          {
            linkDisplayName: 'Stories',
            linkType: 'Category',
            linkCategory: 'jewellery',
            linkUrl: 'jewellery',
            linkDisplayType: 'Text',
            linkId: 'stories',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/5c71a17467613991/webimage-5541281VCUA4070_C.png',
              alt: 'Green bag',
            },
          },
          {
            linkDisplayName: 'Collection Library',
            linkType: 'Content Page',
            linkUrl: '',
            linkDisplayType: 'Text',
            linkId: 'collection-library',
            image: {
              src: 'https://amq-sandbox.getbynder.com/m/43a105ad3b52dca2/webimage-5541281VCUA4070_B.png',
              alt: 'Blue snake',
            },
          },
        ],
      },
    ],
  },
};

export const UPDATED_HEADER_MOCK = {
  generalLinks: [
    {
      sys: {
        id: 'link-1',
        type: 'Entry',
      },
      fields: {
        linkDisplayName: 'Link 1',
        linkType: 'URL',
        linkUrl: 'https://example.com/link-1',
        linkDisplayType: 'button',
        linkId: 'link-1',
        linkOpenInNewTab: true,
      },
    },
  ],
  navigation: {
    sys: {
      id: 'navigation',
      type: 'Entry',
    },
    fields: {
      categoryItems: [
        {
          sys: {
            id: 'category-1',
            type: 'Entry',
          },
          fields: {
            categoryId: 'category-1',
            name: 'Category 1',
            image: {
              sys: {
                id: 'image-1',
                type: 'Asset',
              },
              fields: {
                title: 'Category 1 Image',
                file: {
                  fileName: 'category-1-image.jpg',
                  contentType: 'image/jpeg',
                  url: 'https://example.com/category-1-image.jpg',
                },
              },
            },
            lightLogo: true,
            subcategories: [
              {
                sys: {
                  id: 'subcategory-1',
                  type: 'Entry',
                },
                fields: {
                  categoryId: 'subcategory-1',
                  name: 'Subcategory 1',
                  editTitle: 'Edit Subcategory 1',
                  editLinks: [
                    {
                      sys: {
                        id: 'edit-link-1',
                        type: 'Entry',
                      },
                      fields: {
                        linkDisplayName: 'Edit Link 1',
                        linkType: 'URL',
                        linkUrl: 'https://example.com/edit-link-1',
                        linkDisplayType: 'button',
                        linkId: 'edit-link-1',
                        linkOpenInNewTab: true,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
};
