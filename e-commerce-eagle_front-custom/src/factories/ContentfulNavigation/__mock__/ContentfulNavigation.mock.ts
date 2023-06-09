// this model is a common, raw form of navigation definition response from contentful
export const CONTENTFUL_RAW_RESPONSE_NAVIGATION_DATA = {
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
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3WThtse8lwRMzPR1qXn5el',
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
          id: '1TvBqeC13n1MgUa8WM9sPD',
          type: 'Entry',
          createdAt: '2023-03-28T19:59:48.575Z',
          updatedAt: '2023-04-03T13:34:17.404Z',
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
              id: 'page',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Page: Client Service',
          pageTitle: 'Client Service',
          slug: 'client-service',
          topRegion: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2E5ZPRIcXiupx7e6ZFl2Tm',
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
          id: '1U5vp49Tl6Owhy8SfD4RrM',
          type: 'Entry',
          createdAt: '2023-04-11T08:01:40.806Z',
          updatedAt: '2023-04-11T08:01:40.806Z',
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
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'EDIT LINK',
          linkDisplayName: 'EDIT LINK',
          linkId: 'edit-link',
          linkType: 'Content Page',
          linkContentPage: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1eph204mndiDHkCTtRzgqq',
            },
          },
          linkDisplayType: 'Text',
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4Lzl1OQU9pgIo5DhahQfTi',
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
          id: '1eph204mndiDHkCTtRzgqq',
          type: 'Entry',
          createdAt: '2023-03-28T19:53:23.504Z',
          updatedAt: '2023-03-28T19:53:23.504Z',
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
              id: 'page',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Page: Stories',
          pageTitle: 'Stories',
          slug: 'stories',
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
          linkContentPage: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1eph204mndiDHkCTtRzgqq',
            },
          },
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
          updatedAt: '2023-04-11T08:01:50.951Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 8,
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
          updatedAt: '2023-04-11T13:20:12.919Z',
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
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'SECOND LEVEL CAT IMAGE',
          imageAltText: 'SECOND LEVEL CAT IMAGE',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/3f46d1bb86994048/webimage-Rectangle-8789-2.png',
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
          updatedAt: '2023-04-07T15:43:52.715Z',
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
          internalName: 'Link: Collection Library',
          linkDisplayName: 'Collection Library',
          linkId: 'collection-library',
          linkType: 'Content Page',
          linkDisplayType: 'Text',
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5E4wmV6HJnKWhW4cJHOHLO',
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
          updatedAt: '2023-04-11T15:55:02.323Z',
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
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Category > Men > Suit',
          imageAltText: 'Suit men',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/7281fa5a79712d28/webimage-Rectangle-8789-4.png',
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
          updatedAt: '2023-04-11T06:15:38.862Z',
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
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'FIRST LEVEL CAT IMAGE',
          imageAltText: 'FIRST LEVEL CAT IMAGE',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/76cfa0bfcf546ef7/webimage-5577134B57Q1074_R.png',
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
          id: '3wNmg5e0M782FeTX2Th22i',
          type: 'Entry',
          createdAt: '2023-04-07T15:43:10.759Z',
          updatedAt: '2023-04-11T06:19:35.349Z',
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
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Green bag',
          imageAltText: 'Green bag',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/5c71a17467613991/webimage-5541281VCUA4070_C.png',
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
          updatedAt: '2023-04-11T08:52:58.652Z',
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
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Black suit',
          imageAltText: 'Black suit',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/e2208a91a217993/webimage-011559.png',
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
          updatedAt: '2023-04-07T15:43:14.120Z',
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
              id: 'linkItem',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Stories',
          linkDisplayName: 'Stories',
          linkId: 'stories',
          linkType: 'Category',
          linkCategory: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '6KKPjFYj1Z1F4BaEFa2pm3',
            },
          },
          linkDisplayType: 'Text',
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3wNmg5e0M782FeTX2Th22i',
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
          id: '5CD5M9G9E0Monixho8ZWjU',
          type: 'Entry',
          createdAt: '2023-02-13T11:24:49.133Z',
          updatedAt: '2023-04-11T15:55:40.767Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 12,
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
          lightLogo: true,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3l6M5cof3o4Ee9auNjpl5T',
            },
          },
          isHotCategory: true,
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
          id: '5E4wmV6HJnKWhW4cJHOHLO',
          type: 'Entry',
          createdAt: '2023-04-07T15:43:48.555Z',
          updatedAt: '2023-04-07T15:50:54.854Z',
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
              id: 'bynderImage',
            },
          },
          locale: 'en',
        },
        fields: {
          internalName: 'Blue snake',
          imageAltText: 'Blue snake',
          imageUrl:
            'https://amq-sandbox.getbynder.com/m/43a105ad3b52dca2/webimage-5541281VCUA4070_B.png',
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
          updatedAt: '2023-04-11T15:55:58.818Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 8,
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
          lightLogo: true,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3WThtse8lwRMzPR1qXn5el',
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
          updatedAt: '2023-04-11T08:01:45.656Z',
          environment: {
            sys: {
              id: 'development',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 12,
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
          editLinks: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1U5vp49Tl6Owhy8SfD4RrM',
              },
            },
          ],
          lightLogo: true,
          image: {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2veX0sedUyS5NDlg3ELGtE',
            },
          },
          isHotCategory: true,
          associatedProductIds: '4844444,78777878,787787,78787877,7877787',
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

export const AMQ_NAVIGATION_PROPS_MOCK = {
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
            alt: 'Suit men',
            src: 'https://amq-sandbox.getbynder.com/m/7281fa5a79712d28/webimage-Rectangle-8789-4.png',
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
  links: [
    {
      image: {},
      linkCategory: 'accessories',
      linkColor: 'Light',
      linkContentPage: 'stories',
      linkDisplayName: 'Stores',
      linkDisplayType: 'Text',
      linkId: 'stores',
      linkOpenInNewTab: false,
      linkType: 'Content Page',
      linkUrl: 'stories',
    },
    {
      image: {},
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
      image: {},
      linkContentPage: 'client-service',
      linkDisplayName: 'Client Service',
      linkDisplayType: 'Text',
      linkId: 'client-service',
      linkType: 'Content Page',
      linkUrl: 'client-service',
    },
  ],
};
