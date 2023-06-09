export const CONTENTFUL_LINK_TYPE_CATEGORY_PAGE_RESPONSE_MOCK = {
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
        id: '2AsKKuFv5fDb0I7jdB2fh',
        type: 'Entry',
        createdAt: '2023-02-13T10:51:25.478Z',
        updatedAt: '2023-02-27T09:36:15.396Z',
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
            id: 'linkItem',
          },
        },
        locale: 'en',
      },
      fields: {
        linkDisplayName: 'Stores',
        linkType: 'Category',
        linkCategory: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '1Q03HTLxV0YHB9ZE9kjpDE',
          },
        },
        linkDisplayType: 'Text',
        linkId: 'stores',
        linkColor: 'Light',
        linkOpenInNewTab: false,
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
          id: '1Q03HTLxV0YHB9ZE9kjpDE',
          type: 'Entry',
          createdAt: '2023-02-13T11:18:57.987Z',
          updatedAt: '2023-02-13T12:29:44.244Z',
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
          name: 'Ready-to-wear',
          categoryId: 'readyToWear',
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
          image: {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '1h1aUWQJ6POYqmlokoY7bZ',
            },
          },
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
          id: '32xNIp8aj5K5ORUYjFHUeP',
          type: 'Entry',
          createdAt: '2023-02-13T12:25:35.876Z',
          updatedAt: '2023-02-13T12:25:35.876Z',
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
          linkDisplayName: 'View all',
          linkType: 'Category',
          linkDisplayType: 'Text',
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
            url: '//images.ctfassets.net/08wl9bk7awgk/1h1aUWQJ6POYqmlokoY7bZ/9b06214dba03c6ec1f30f62d0773a32a/Large-PLP52.jpg',
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
    ],
  },
};

export const CONTENTFUL_LINK_TYPE_CONTENT_PAGE_RESPONSE_MOCK = {
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
        id: '2AsKKuFv5fDb0I7jdB2fh',
        type: 'Entry',
        createdAt: '2023-02-13T10:51:25.478Z',
        updatedAt: '2023-02-27T11:25:44.973Z',
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
        linkDisplayName: 'Stores',
        linkType: 'Content Page',
        linkContentPage: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '2HjiP4qFczeHNbc1xvANDl',
          },
        },
        linkDisplayType: 'Text',
        linkId: 'stores',
        linkColor: 'Light',
        linkOpenInNewTab: false,
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
          id: '2HjiP4qFczeHNbc1xvANDl',
          type: 'Entry',
          createdAt: '2023-02-27T11:24:50.802Z',
          updatedAt: '2023-02-27T11:24:50.802Z',
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
              id: 'contentPage',
            },
          },
          locale: 'en',
        },
        fields: {
          title: 'First Content Page',
          slug: 'first-content-page',
        },
      },
    ],
  },
};
