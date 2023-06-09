const radioGroupMock = {
  title: 'A radio group title',
  values: [
    {
      value: 'first',
      id: 'one',
      label: 'This is the first option',
    },
    {
      value: 'second',
      id: 'two',
      label: 'This is the second option',
    },
    {
      value: 'third',
      id: 'three',
      label: 'This is the third option',
    },
  ],
};

export const radioGroupFormMock = {
  ...radioGroupMock,
  required: true,
  name: 'RadioGroup',
  errors: {
    valueMissing: 'Please choose an option.',
  },
};

export default radioGroupMock;
