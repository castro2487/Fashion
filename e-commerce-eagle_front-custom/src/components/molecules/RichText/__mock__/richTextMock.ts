import { Document } from '@contentful/rich-text-types';

const contentfulRichTextMock = {
  richTextDocument: {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'heading-1',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 1',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'heading-2',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 2',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'heading-3',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 3',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'heading-4',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 4',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'heading-5',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 5',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'heading-6',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 6',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Lorem ipsum',
            marks: [
              {
                type: 'bold',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: ' dolor sit amet, ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'consectetur',
            marks: [
              {
                type: 'italic',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: ' adipiscing ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'elit',
            marks: [
              {
                type: 'underline',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value:
              '. Quisque arcu leo, placerat eget lacus in, posuere sollicitudin magna. Curabitur faucibus mi metus ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            data: {
              uri: 'https://www.google.com',
            },
            content: [
              {
                nodeType: 'text',
                value: 'test link',
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: 'text',
            value: '.',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'hr',
        data: {},
        content: [],
      },
      {
        nodeType: 'unordered-list',
        data: {},
        content: [
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'text',
                    value: 'item 1',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'text',
                    value: 'item 2',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        nodeType: 'ordered-list',
        data: {},
        content: [
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'text',
                    value: 'item 1',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'text',
                    value: 'item 2',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
        ],
      },
    ],
  } as Document,
};

export default contentfulRichTextMock;
