import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hotspot, HotspotTrigger, HotspotContent } from '@organisms/Hotspot';
import { Image } from '@atoms/Image';
import { Text } from '@atoms/Text';
import { Link } from '@atoms/Link';
import { FramedText } from '@molecules/FramedText';
import { ArrowRight } from '@icons';

export default {
  title: 'Organisms/Hotspot',
  component: Hotspot,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Hotspot>;

const Template: ComponentStory<typeof Hotspot> = (args) => (
  <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
    <Hotspot {...args}>
      <HotspotTrigger />

      <HotspotContent>{args.children}</HotspotContent>
    </Hotspot>
  </div>
);

export const WithImage = Template.bind({});
WithImage.args = {
  children: (
    <>
      <Image
        src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
        alt="Hotspot image"
      />
      <Text
        type="h4"
        css={{
          color: '$white',
          position: 'absolute',
          bottom: '$space$l',
          left: '50%',
          transform: 'translate(-50%, 0)',
          textAlign: 'center',
        }}
      >
        Strong, yet supple. The juxtaposing characteristics of leather make it
        the most versatile material.
      </Text>
    </>
  ),
};

export const WithVideo = Template.bind({});
WithVideo.args = {
  children: (
    <div style={{ width: '100%', height: '100%' }}>
      <video
        muted
        loop
        playsInline
        autoPlay
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/amq-video.mp4" type="video/mp4" />
      </video>
    </div>
  ),
};

export const Other = Template.bind({});
Other.args = {
  children: <FramedText title="I can be anything" subtitle="Really" />,
};

export const Contained: ComponentStory<typeof Hotspot> = (args) => {
  const [containerOne, setContainerOne] = useState<HTMLDivElement | null>(null);
  const [containerTwo, setContainerTwo] = useState<HTMLDivElement | null>(null);

  return (
    <div style={{ display: 'flex', gap: 1 }}>
      <div
        ref={setContainerOne}
        style={{
          width: 400,
          height: 600,
          position: 'relative',
        }}
      >
        <Image
          src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
          alt="Hotspot image"
        />
        <Hotspot {...args} modal={false}>
          <HotspotTrigger />

          <HotspotContent container={containerOne}>
            {args.children}
          </HotspotContent>
        </Hotspot>
      </div>
      <div
        ref={setContainerTwo}
        style={{
          width: 400,
          height: 600,
          position: 'relative',
        }}
      >
        <Image
          src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
          alt="Hotspot image"
        />
        <Hotspot {...args} modal={false}>
          <HotspotTrigger />

          <HotspotContent container={containerTwo}>
            {args.children}
          </HotspotContent>
        </Hotspot>
      </div>
    </div>
  );
};
Contained.args = {
  children: (
    <div
      style={{
        background: 'black',
        color: 'white',
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Text as="p" type="h2">
        Guinevere Van Seemus
      </Text>
      <Text as="p" type="labelMedium">
        Model and photographer based in the USA. “I make images for many
        reasons, but prime among them is that I’m not great with words”
      </Text>
      <Link
        linkUrl="/"
        styled="dark"
        underline={false}
        css={{ display: 'flex', gap: '$xxs', alignItems: 'center' }}
        linkDisplayType={''}
        linkId={''}
        linkColor={''}
      >
        <Text type="labelMedium">Read more</Text>
        <ArrowRight />
      </Link>
    </div>
  ),
};
