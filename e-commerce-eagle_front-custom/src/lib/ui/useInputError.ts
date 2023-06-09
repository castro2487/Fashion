import { useState, useEffect, FormEvent, FocusEvent, RefObject } from 'react';

export type ErrorList = {
  [index in keyof ValidityState]?: string;
};

export type Elements =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

function useInputError(
  errors: ErrorList | undefined,
  ref?: RefObject<Elements>,
  customValidation?: boolean
) {
  const [error, setError] = useState<string | null>(null);

  const getCustomErrorMessage = (validity: ValidityState) => {
    // TODO: try and find solution for looping over properties with typescript support
    if (validity.customError && errors?.customError) {
      return errors.customError;
    }
    if (validity.valueMissing && errors?.valueMissing) {
      return errors.valueMissing;
    }
    if (validity.typeMismatch && errors?.typeMismatch) {
      return errors.typeMismatch;
    }
    if (validity.patternMismatch && errors?.patternMismatch) {
      return errors.patternMismatch;
    }
    if (validity.tooLong && errors?.tooLong) {
      return errors.tooLong;
    }
    if (validity.tooShort && errors?.tooShort) {
      return errors.tooShort;
    }
    if (validity.rangeUnderflow && errors?.rangeUnderflow) {
      return errors.rangeUnderflow;
    }
    if (validity.rangeOverflow && errors?.rangeOverflow) {
      return errors.rangeOverflow;
    }
    if (validity.stepMismatch && errors?.stepMismatch) {
      return errors.stepMismatch;
    }
    if (validity.badInput && errors?.badInput) {
      return errors.badInput;
    }
  };

  const checkCustomValidation = (input: Elements) => {
    if (customValidation !== undefined && errors?.customError) {
      input.setCustomValidity(customValidation ? '' : errors.customError);
      if (customValidation) {
        setError(null);
      }
    }
  };

  const onBlur = (e: FocusEvent<Elements>) => {
    checkCustomValidation(e.target);
    const isValid = e.target.checkValidity();
    if (isValid) {
      setError(null);
    }
  };

  const onInvalid = (e: FormEvent<Elements> | FocusEvent<Elements> | Event) => {
    if ('target' in e && 'validity' in e.target!) {
      const errorMessage = getCustomErrorMessage(e.target.validity);
      setError(errorMessage || e.target.validationMessage);
    }
  };

  useEffect(() => {
    if (ref?.current) {
      checkCustomValidation(ref.current);
    }
  }, [customValidation]);

  return { error, setError, onBlur, onInvalid, checkCustomValidation };
}

export default useInputError;
