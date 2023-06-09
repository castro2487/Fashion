const datepickerMock = {
  id: 'default',
  label: 'Default field',
  minDate: new Date(),
};

export const datepickerI18nMock = {
  ...datepickerMock,
  dateFormat: 'dd/MM/yy',
};

export const datepickerFormMock = {
  id: 'required',
  label: 'Required field',
  required: true,
};

export default datepickerMock;
