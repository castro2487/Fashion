import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InformativeBanner } from '@molecules/InformativeBanner';
import { Text } from '@atoms/Text';
import { Image } from '@atoms/Image';
import { Link } from '@atoms/Link';
import { CollapsibleText } from '@molecules/CollapsibleText';
import { HeaderBar } from '@organisms/HeaderBar';

export default {
  title: 'Molecules/InformativeBanner',
  component: InformativeBanner,
  args: {
    delay: 3000,
  },
  argTypes: {
    delay: {
      type: 'number',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof InformativeBanner>;

export const Default: ComponentStory<typeof InformativeBanner> = (args) => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image
        src="https://source.unsplash.com/random/1500x1500/?fashion-beauty"
        alt="alt"
      />
      <div style={{ position: 'sticky', top: 0 }}>
        <InformativeBanner {...args}>
          <Text as="p" type="labelLarge">
            Hello world with{' '}
            <Link
              linkUrl="/test"
              linkId={''}
              linkDisplayType={''}
              linkColor={''}
            >
              a link
            </Link>
          </Text>
          <CollapsibleText
            moreLabel="read more"
            lessLabel="read less"
            type="labelLarge"
            css={{ '--defaultColor': '$colors$black' }}
            clampNumber={2}
          >
            Adipisicing reprehenderit consequat eu do. Occaecat cillum laboris
            et commodo amet. Et commodo magna minim proident. Eiusmod ad laborum
            voluptate occaecat voluptate aliqua voluptate. Ut dolore incididunt
            magna nostrud ullamco aliquip. Consectetur magna cillum Lorem quis
            excepteur est Lorem veniam ea elit consequat. Qui aliquip Lorem in
            id veniam quis commodo proident ex.
          </CollapsibleText>
          <Text as="p" type="labelLarge">
            Hello world
          </Text>
        </InformativeBanner>
      </div>
    </div>
  );
};
