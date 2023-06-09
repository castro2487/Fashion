import React, { useState, useEffect } from 'react';
import { TextLink } from '@contentful/f36-components';
import { useSDK } from '@contentful/react-apps-toolkit';

const CONTENT_BYNDER_FIELD_LARGE_ID = 'value';
const CONTENT_BYNDER_FIELD_TABLET_ID = 'valueTablet';
const CONTENT_BYNDER_FIELD_MOBILE_ID = 'valueMobile';
const CONTENT_IMAGE_LARGE_FIELD_ID = 'imageUrl';
const CONTENT_IMAGE_TABLET_FIELD_ID = 'tabletImageUrl';
const CONTENT_IMAGE_MOBILE_FIELD_ID = 'mobileImageUrl';

const Field = () => {
  const sdk = useSDK();
  const contentFieldLargeToWatch =
    sdk.entry.fields[CONTENT_BYNDER_FIELD_LARGE_ID];
  const contentFieldTabletToWatch =
    sdk.entry.fields[CONTENT_BYNDER_FIELD_TABLET_ID];
  const contentFieldMobileToWatch =
    sdk.entry.fields[CONTENT_BYNDER_FIELD_MOBILE_ID];
  const currentField = sdk.field;
  const [displayValue, setDisplayValue] = useState(currentField.getValue());

  useEffect(() => {
    const detach = contentFieldLargeToWatch.onValueChanged(
      ([firstItem] = []) => {
        if (currentField.id === CONTENT_IMAGE_LARGE_FIELD_ID) {
          if (firstItem) {
            const value = firstItem?.selectedFile?.url || '';

            currentField.setValue(value);
            setDisplayValue(value);
          } else {
            currentField.setValue('');
          }
        }
      }
    );

    return () => detach();
  }, [contentFieldLargeToWatch, currentField]);

  useEffect(() => {
    const detach = contentFieldTabletToWatch.onValueChanged(
      ([firstItem] = []) => {
        if (currentField.id === CONTENT_IMAGE_TABLET_FIELD_ID) {
          if (firstItem) {
            const value = firstItem?.selectedFile?.url || '';

            currentField.setValue(value);
            setDisplayValue(value);
          } else {
            currentField.setValue('');
          }
        }
      }
    );

    return () => detach();
  }, [contentFieldTabletToWatch, currentField]);

  useEffect(() => {
    const detach = contentFieldMobileToWatch.onValueChanged(
      ([firstItem] = []) => {
        if (currentField.id === CONTENT_IMAGE_MOBILE_FIELD_ID) {
          if (firstItem) {
            const value = firstItem?.selectedFile?.url || '';

            currentField.setValue(value);
            setDisplayValue(value);
          } else {
            currentField.setValue('');
          }
        }
      }
    );

    return () => detach();
  }, [contentFieldMobileToWatch, currentField]);

  return (
    <TextLink href={displayValue} target="_blank" rel="noopener noreferrer">
      {displayValue}
    </TextLink>
  );
};

export default Field;
