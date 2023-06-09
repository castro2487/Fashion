/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Stack,
  TextInput,
  FormControl,
  Button,
} from '@contentful/f36-components';

export const ModalEditGroupItem = ({
  translations,
  setTranslations,
  editData,
  isShown,
  setShown,
}) => {
  const [keyValue, setKeyValue] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editData) {
      setKeyValue(editData.translationKey);
      setValue(translations[editData.groupName][editData.translationKey]);
    }
  }, [editData]);

  const updateFieldToGroup = () => {
    if (translations[editData.groupName]) {
      setTranslations((state) => {
        const newState = { ...state };

        newState[editData.groupName][editData.translationKey] = value;
        return newState;
      });
    }

    onClose();
  };

  const isFieldValid = (v) => v.indexOf('"') === -1;
  const onClose = () => {
    setValue('');
    setKeyValue('');
    setShown(false);
  };

  return (
    <>
      <Modal onClose={onClose} isShown={isShown}>
        {() => (
          <>
            <Modal.Header
              title="Update translation group item"
              onClose={onClose}
            />
            <Modal.Content>
              <FormControl isRequired>
                <Stack fullWidth flexDirection="column" alignItems="flex-start">
                  <div>
                    <FormControl.Label>
                      Translation group item
                    </FormControl.Label>
                    <TextInput
                      value={keyValue}
                      type="text"
                      name="groupItemName"
                      isDisabled
                      placeholder="Translation group item name"
                      onChange={(e) => setKeyValue(e.target.value)}
                    />
                  </div>
                  <div>
                    <FormControl.Label>
                      Translation group item value
                    </FormControl.Label>
                    <TextInput
                      value={value}
                      type="text"
                      name="groupItemValue"
                      placeholder="Translation group item value"
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <FormControl.HelpText>
                      Provide a translation group item value
                    </FormControl.HelpText>
                    {value && !isFieldValid(value) && (
                      <FormControl.ValidationMessage>
                        Invalid translation group item value!
                        <br />- Should not contain double quotes
                      </FormControl.ValidationMessage>
                    )}
                  </div>
                </Stack>
                <Stack alignItems="flex-end" fullWidth flexDirection="column">
                  <Button
                    variant="positive"
                    onClick={updateFieldToGroup}
                    isDisabled={!isFieldValid(value)}
                  >
                    Add
                  </Button>
                </Stack>
              </FormControl>
            </Modal.Content>
          </>
        )}
      </Modal>
    </>
  );
};
