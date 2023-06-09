import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SubmittableInput } from '@molecules/SubmittableInput';

export default {
  title: 'Molecules/SubmittableInput',
  component: SubmittableInput,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof SubmittableInput>;

export const Default: ComponentStory<typeof SubmittableInput> = (args) => {
  const [selectedSize, setSelectedSize] = useState(false);

  return (
    <div style={{ width: 375 }}>
      <div>
        {selectedSize ? (
          <button
            onClick={() => {
              setSelectedSize(false);
            }}
          >
            size one selected, click to unselect
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedSize(true);
            }}
          >
            click to select size one
          </button>
        )}
      </div>

      <SubmittableInput {...args} isCustomCheckValid={selectedSize} />
    </div>
  );
};
Default.args = {
  id: 'zipcode',
  label: 'Zip code',
  required: true,
  pattern: '^[0-9]{4}([ ][a-zA-Z]{2})?$',
  errors: {
    valueMissing: 'This field is required',
    patternMismatch: 'Wrong format. Example: 4444 or 4444 KK',
    customError: 'You need to select a size first.',
  },
  onSubmit: (value) => {
    return null;
  },
};
