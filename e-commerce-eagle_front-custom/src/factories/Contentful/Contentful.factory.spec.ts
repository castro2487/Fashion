import { ContentfulFactory } from './Contentful.factory';

describe('Contentful factory tests', () => {
  it('should extract API raw data fields with IDs', () => {
    const expected = [
      {
        fields: {
          linkDisplayName: 'Account',
          linkDisplayType: 'Text',
          linkId: 'account',
          linkType: 'Content Page',
        },
        metadata: { tags: [] },
        sys: {
          contentType: {
            sys: { id: 'linkItem', linkType: 'ContentType', type: 'Link' },
          },
          createdAt: '2023-02-13T10:57:34.028Z',
          environment: {
            sys: { id: 'development', linkType: 'Environment', type: 'Link' },
          },
          id: '2HkhrEk2JFba3aqn0NLH9d',
          locale: 'en',
          revision: 2,
          space: {
            sys: { id: '08wl9bk7awgk', linkType: 'Space', type: 'Link' },
          },
          type: 'Entry',
          updatedAt: '2023-02-15T11:16:44.423Z',
        },
      },
      {
        fields: {
          linkDisplayName: 'Mon compte',
          linkDisplayType: 'Text',
          linkId: 'account',
          linkType: 'Content Page',
        },
        metadata: { tags: [] },
        sys: {
          contentType: {
            sys: { id: 'linkItem', linkType: 'ContentType', type: 'Link' },
          },
          createdAt: '2023-02-13T10:51:25.478Z',
          environment: {
            sys: { id: 'development', linkType: 'Environment', type: 'Link' },
          },
          id: '2AsKKuFv5fDb0I7jdB2fh',
          locale: 'en',
          revision: 3,
          space: {
            sys: { id: '08wl9bk7awgk', linkType: 'Space', type: 'Link' },
          },
          type: 'Entry',
          updatedAt: '2023-02-15T11:16:53.243Z',
        },
      },
      {
        fields: {
          linkDisplayName: 'Stores',
          linkDisplayType: 'Text',
          linkId: 'stores',
          linkType: 'External',
        },
        metadata: { tags: [] },
        sys: {
          contentType: {
            sys: { id: 'linkItem', linkType: 'ContentType', type: 'Link' },
          },
          createdAt: '2023-02-13T10:51:25.478Z',
          environment: {
            sys: { id: 'development', linkType: 'Environment', type: 'Link' },
          },
          id: '2AsKKuFv5fDb0I7jdB2fh',
          locale: 'en',
          revision: 3,
          space: {
            sys: { id: '08wl9bk7awgk', linkType: 'Space', type: 'Link' },
          },
          type: 'Entry',
          updatedAt: '2023-02-15T11:16:53.243Z',
        },
      },
    ];

    const contentFields = {
      oneToManyRefType: [
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '08wl9bk7awgk' },
            },
            id: '2HkhrEk2JFba3aqn0NLH9d',
            type: 'Entry',
            createdAt: '2023-02-13T10:57:34.028Z',
            updatedAt: '2023-02-15T11:16:44.423Z',
            environment: {
              sys: { id: 'development', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'linkItem' },
            },
            locale: 'en',
          },
          fields: {
            linkDisplayName: 'Account',
            linkType: 'Content Page',
            linkDisplayType: 'Text',
            linkId: 'account',
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: '08wl9bk7awgk' },
            },
            id: '2AsKKuFv5fDb0I7jdB2fh',
            type: 'Entry',
            createdAt: '2023-02-13T10:51:25.478Z',
            updatedAt: '2023-02-15T11:16:53.243Z',
            environment: {
              sys: { id: 'development', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'linkItem' },
            },
            locale: 'en',
          },
          fields: {
            linkDisplayName: 'Mon compte',
            linkType: 'Content Page',
            linkDisplayType: 'Text',
            linkId: 'account',
          },
        },
      ],
      oneToOneRefType: {
        metadata: { tags: [] },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: '08wl9bk7awgk' },
          },
          id: '2AsKKuFv5fDb0I7jdB2fh',
          type: 'Entry',
          createdAt: '2023-02-13T10:51:25.478Z',
          updatedAt: '2023-02-15T11:16:53.243Z',
          environment: {
            sys: { id: 'development', type: 'Link', linkType: 'Environment' },
          },
          revision: 3,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'linkItem' },
          },
          locale: 'en',
        },
        fields: {
          linkDisplayName: 'Stores',
          linkType: 'External',
          linkDisplayType: 'Text',
          linkId: 'stores',
        },
      },
    };

    const factoryInstance = new ContentfulFactory();
    expect(factoryInstance.flattenReferenceFieldsModel(contentFields)).toEqual(
      expected
    );
  });
});
