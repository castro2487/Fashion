const selectMock = {
  id: 'testId',
  name: 'testName',
  title: 'Title',
  placeholder: 'Select option',
  ariaLabel: 'Title',
  options: [
    {
      id: '1',
      label: 'Select option 1',
    },
    {
      id: '2',
      label: 'Select option 2',
    },
    {
      id: '3',
      label: 'Select option 3',
    },
  ],
};

export const selectDefaultValueMock = {
  ...selectMock,
  defaultValue: selectMock.options[2].id,
};

export default selectMock;
