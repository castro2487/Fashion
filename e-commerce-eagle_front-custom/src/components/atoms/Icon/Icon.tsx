'use client';
import React from 'react';
import { dynamicIconsMap, IconName } from '@functional/DynamicIconsMap';
import { IconWrapper } from './Icon.styles';

import { IconProps } from '@amq';

export const Icon = ({ iconName, ...rest }: IconProps) => {
  if (!iconName || !Object.values(IconName).includes(iconName)) {
    return <>Please, provide a valid icon name</>;
  }

  const DynamicIcon = dynamicIconsMap[iconName as IconName];

  return (
    <IconWrapper display="flex" alignItems="center">
      <DynamicIcon {...rest} />
    </IconWrapper>
  );
};
