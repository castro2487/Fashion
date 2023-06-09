const inputMock = {
  id: 'default',
  label: 'Default field',
};

export const inputDescriptionMock = {
  ...inputMock,
  description: 'This is a description.',
};

export const inputHelperMock = {
  ...inputMock,
  helperText: 'this is a helper text',
};

export const inputRequiredMock = {
  ...inputMock,
  label: 'Required field',
  required: true,
};

export const inputCustomErrorMock = {
  id: 'email',
  label: 'Email *',
  required: true,
  errors: {
    valueMissing: 'This field is required',
    typeMismatch: 'Please make sure the email is valid.',
  },
};

export const inputPatternCheckMock = {
  id: 'phone',
  label: 'Phone *',
  required: true,
  pattern: '^\\d{6,12}$',
  errors: {
    valueMissing: 'This field is required',
    patternMismatch: 'Make sure the format is correct',
  },
};

export default inputMock;
