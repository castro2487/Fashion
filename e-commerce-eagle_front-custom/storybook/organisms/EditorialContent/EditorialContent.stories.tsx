import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '@atoms/Text';
import { Button } from '@atoms/Button';
import { Link } from '@atoms/Link';
import { ArrowRight } from '@icons';

import {
  EditorialRoot,
  EditorialImage,
  EditorialText,
} from '@organisms/EditorialContent';

export default {
  title: 'Organisms/Editorial',
  component: EditorialRoot,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof EditorialRoot>;

const TextContent = () => (
  <div
    style={{ maxWidth: 300, display: 'flex', flexDirection: 'column', gap: 8 }}
  >
    <Text type="h3" css={{ color: '$black' }}>
      Discover the latest Winter 2022 collection
    </Text>
    <Text type="labelMedium" css={{ color: '$darkGrey' }}>
      The mycelium-inspired pieces made their debut on the New York runway in
      March, and are now availabe online and in stores.
    </Text>
    <Button
      variant="tertiary"
      as={Link}
      linkUrl="/test"
      linkDisplayType={''}
      linkId={''}
      linkColor={''}
      underline={false}
      styled="default"
    >
      Shop collection
      <ArrowRight role="none" />
    </Button>
  </div>
);

export const ImageText: ComponentStory<typeof EditorialRoot> = () => (
  <EditorialRoot>
    <EditorialImage
      src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
      alt="Test"
    />
    <EditorialText>
      <TextContent />
    </EditorialText>
  </EditorialRoot>
);

export const OnlyTexts: ComponentStory<typeof EditorialRoot> = () => (
  <EditorialRoot>
    <EditorialText>
      <TextContent />
    </EditorialText>
    <EditorialText>
      <TextContent />
    </EditorialText>
  </EditorialRoot>
);

export const OnlyImages: ComponentStory<typeof EditorialRoot> = () => (
  <EditorialRoot>
    <EditorialImage
      src="https://source.unsplash.com/random/960x1440/?fashion-beauty,rock"
      alt="Test"
    />
    <EditorialImage
      src="https://source.unsplash.com/random/960x1440/?fashion-beauty,wood"
      alt="Test"
    />
  </EditorialRoot>
);

export const SoloImage: ComponentStory<typeof EditorialRoot> = () => (
  <EditorialRoot>
    <EditorialImage
      src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
      alt="Test"
    />
  </EditorialRoot>
);
