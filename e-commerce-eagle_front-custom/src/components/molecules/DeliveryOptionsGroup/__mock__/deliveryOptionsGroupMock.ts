export const deliveryOptionsGroupMock = {
  values: [
    {
      value: 'first',
      id: 'one',
      label: 'This is the first option',
      price: 'Free',
      description: [
        {
          title: 'Leather Bustier Drape Dress, Harness Pump Punk',
          description: 'Estimated delivery date: 18/10/2022',
        },
        {
          title: 'The Bow',
          description: 'Estimated delivery date: 20/01/2023',
        },
      ],
    },
    {
      value: 'second',
      id: 'two',
      label: 'This is the second option',
      price: 'Free',
      description: 'Estimated delivery date: 18/10/2022',
    },
    {
      value: 'third',
      id: 'three',
      label: 'This is the third option',
      price: 'Free',
      description: 'Choose the date and time of your delivery',
    },
  ],
};

export const deliveryOptionsGroupFormMock = {
  ...deliveryOptionsGroupMock,
  required: true,
  name: 'RadioGroup',
  errors: {
    valueMissing: 'Please choose an option.',
  },
};
