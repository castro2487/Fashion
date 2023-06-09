import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownItem,
} from '@molecules/Dropdown';
import dropdownMock from '@molecules/Dropdown/__mock__/dropdownMock';

import { Button } from '@atoms/Button';
import { ArrowDown, Account } from '@icons';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Dropdown>;

export const RadioDropdown: ComponentStory<typeof Dropdown> = () => {
  const [sort, setSort] = useState(dropdownMock.options[0].value);

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="tertiary">
          <ArrowDown role="none" />
          sort
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownRadioGroup value={sort} onValueChange={setSort}>
          {dropdownMock.options.map((option) => (
            <DropdownRadioItem key={option.value} {...option} />
          ))}
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>
  );
};

export const ActionsDropdown: ComponentStory<typeof Dropdown> = () => {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="tertiary">
          <Account title="my account" />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem
          label="My profile"
          onSelect={action('profile item click')}
        />
        <DropdownItem label="Log out" onSelect={action('logout item click')} />
      </DropdownContent>
    </Dropdown>
  );
};
