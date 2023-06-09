import { ContentfulDynamicComponentService } from '@services/ContentfulDynamicComponent/ContentfulDynamicComponent.service';
import { ContentfulAccordionFactory } from '@factories/ContentfulAccordion/ContentfulAccordion.factory';
import { CONTENTFUL_ACCORDION_COMPONENT_RESPONSE_DATA_MOCK } from '@factories/ContentfulAccordion/__mock__/ContentfulAccordion.mock';

jest.mock('@services/Redis/Redis.service');

describe('ContentfulAccordionFactory tests', () => {
  beforeAll(() => {
    jest
      .spyOn(ContentfulDynamicComponentService.prototype, 'getComponentData')
      .mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve(CONTENTFUL_ACCORDION_COMPONENT_RESPONSE_DATA_MOCK)
          )
      );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should initialize ContentfulAccordionFactory and return the right props data', async () => {
    const expected = {
      internalName: 'FAQ - My Profile',
      title: 'My Profile',
      contentItems: [
        {
          componentType: 'accordionComponent',
          componentId: 'sA5vtWiiJXVsSESUTTYvt',
          data: {
            alignment: 'center',
            title: 'Question 1',
            contentItems: [
              {
                componentType: 'richText',
                componentId: '6SvuNotHyufhxkXYNBTpEi',
                data: {
                  richTextDocument: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [{ type: 'bold' }],
                            value: 'Lorem Ipsum',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value: 'test',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          componentType: 'accordionComponent',
          componentId: '1KdvWpTUhf96en9NZgM8Gs',
          data: {
            alignment: 'center',
            title: 'Question 2',
            contentItems: [
              {
                componentType: 'richText',
                componentId: '0e0eOVPT2UrhFBRpUDmQh',
                data: {
                  richTextDocument: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [{ type: 'bold' }],
                            value: 'Lorem Ipsum',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value: 'test',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
      ],
    };

    const accordionEntryid = '4VD3hitl18j5THFBzWFknC';
    const contentfulService = new ContentfulDynamicComponentService(
      'en',
      accordionEntryid
    );
    const accordionContentfulData = await contentfulService.initialize();

    const { data: accordionData } = new ContentfulAccordionFactory(
      accordionContentfulData
    );

    expect(accordionData).toEqual(expected);
  });
});
