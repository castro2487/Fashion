'use client';

import React, { ReactNode } from 'react';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, Block, Inline } from '@contentful/rich-text-types';
import { Document } from '@contentful/rich-text-types';

import { Text } from '@atoms/Text/Text';

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <b>{text}</b>,
    [MARKS.ITALIC]: (text: ReactNode) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => (
      <Text as="h1" type="h1">
        {children}
      </Text>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => (
      <Text as="h2" type="h2">
        {children}
      </Text>
    ),
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
      <Text as="h3" type="h3">
        {children}
      </Text>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => (
      <Text as="h4" type="h4">
        {children}
      </Text>
    ),
    [BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => (
      <Text as="h5">{children}</Text>
    ),
    [BLOCKS.HEADING_6]: (node: Block | Inline, children: ReactNode) => (
      <Text as="h6">{children}</Text>
    ),
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
      <Text as="p" type="body">
        {children}
      </Text>
    ),
    [BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => (
      <Text as="ol">{children}</Text>
    ),
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => (
      <Text as="ul">{children}</Text>
    ),
  },
};

export const RichText = (data: any) => {
  if (!data || !data.richTextDocument) {
    return <></>;
  }
  return <>{documentToReactComponents(data.richTextDocument, options)}</>;
};
