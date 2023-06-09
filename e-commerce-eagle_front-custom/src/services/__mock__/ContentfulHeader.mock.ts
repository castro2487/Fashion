export const CONTENTFUL_HEADER_CONTENT_TYPE_DATA_MOCK = {
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
        updatedAt: '2023-02-15T10:02:04.739Z',
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
            id: 'header',
          },
        },
        locale: 'fr',
      },
      fields: {
        generalLinks: [
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
              id: '2AsKKuFv5fDb0I7jdB2fh',
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
          id: '2AsKKuFv5fDb0I7jdB2fh',
          type: 'Entry',
          createdAt: '2023-02-13T10:51:25.478Z',
          updatedAt: '2023-02-13T10:52:49.906Z',
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
              id: 'linkItem',
            },
          },
          locale: 'fr',
        },
        fields: {
          linkDisplayName: 'Boutiques',
          linkType: 'External',
          linkDisplayType: 'Text',
          linkId: 'Stores',
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
          updatedAt: '2023-02-13T10:57:34.028Z',
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
          locale: 'fr',
        },
        fields: {
          linkDisplayName: 'Mon compte',
          linkType: 'Content Page',
          linkDisplayType: 'Text',
          linkId: 'account',
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
          updatedAt: '2023-02-13T11:27:54.265Z',
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
              id: 'navigation',
            },
          },
          locale: 'fr',
        },
        fields: {
          name: 'Main nav',
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
    ],
  },
};

export const CONTENTFUL_HEADER_REF_FIELDS_DATA_MOCK = [
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
      updatedAt: '2023-02-15T11:16:53.243Z',
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
      locale: 'fr',
    },
    fields: {
      linkDisplayName: 'Boutiques',
      linkType: 'External',
      linkDisplayType: 'Text',
      linkId: 'stores',
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
      updatedAt: '2023-02-15T11:16:44.423Z',
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
          id: 'linkItem',
        },
      },
      locale: 'fr',
    },
    fields: {
      linkDisplayName: 'Mon compte',
      linkType: 'Content Page',
      linkDisplayType: 'Text',
      linkId: 'account',
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
      updatedAt: '2023-02-13T11:27:54.265Z',
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
          id: 'navigation',
        },
      },
      locale: 'fr',
    },
    fields: {
      name: 'Main nav',
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
      id: '2AsKKuFv5fDb0I7jdB2fh',
      type: 'Entry',
      createdAt: '2023-02-13T10:51:25.478Z',
      updatedAt: '2023-02-13T10:52:49.906Z',
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
          id: 'linkItem',
        },
      },
      locale: 'fr',
    },
    fields: {
      linkDisplayName: 'Boutiques',
      linkType: 'External',
      linkDisplayType: 'Text',
      linkId: 'stores',
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
      updatedAt: '2023-02-13T10:57:34.028Z',
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
      locale: 'fr',
    },
    fields: {
      linkDisplayName: 'Mon compte',
      linkType: 'Content Page',
      linkDisplayType: 'Text',
      linkId: 'account',
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
      updatedAt: '2023-02-13T11:27:54.265Z',
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
          id: 'navigation',
        },
      },
      locale: 'fr',
    },
    fields: {
      name: 'Main nav',
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
];
