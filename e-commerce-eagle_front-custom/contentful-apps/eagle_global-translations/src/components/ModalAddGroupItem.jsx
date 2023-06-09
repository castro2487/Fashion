import React, { useState } from 'react';
import {
  Modal,
  Stack,
  TextInput,
  FormControl,
  Button,
} from '@contentful/f36-components';
import { KEY_VALIDATION } from '../shared';

export const ModalAddGroupItem = ({
  translations,
  setTranslations,
  groupName,
}) => {
  const [isShown, setShown] = useState(false);
  const [keyValue, setKeyValue] = useState('');
  const [value, setValue] = useState('');

  const addFieldToGroup = () => {
    if (!isFieldDuplicate(keyValue)) {
      setTranslations((state) => ({
        ...state,
        [groupName]: {
          ...(translations[groupName] || {}),
          [keyValue]: value,
        },
      }));
      onClose();
    }
  };

  const isKeyFieldValid = (v) => KEY_VALIDATION.test(v);
  const isFieldValid = (v) => v.indexOf('"') === -1;
  const isFieldDuplicate = (v) => !!(translations[groupName] || {})[v];
  const onClose = () => {
    setValue('');
    setKeyValue('');
    setShown(false);
  };

  return (
    <>
      <Button variant="primary" size="small" onClick={() => setShown(true)}>
        New translation item
      </Button>
      <Modal onClose={onClose} isShown={isShown}>
        {() => (
          <>
            <Modal.Header
              title="Add new translation group item"
              onClose={onClose}
            />
            <Modal.Content>
              <FormControl
                isRequired
                isInvalid={keyValue && !isKeyFieldValid(keyValue)}
              >
                <Stack fullWidth flexDirection="column" alignItems="flex-start">
                  <div>
                    <FormControl.Label>
                      Translation group item
                    </FormControl.Label>
                    <TextInput
                      value={keyValue}
                      type="text"
                      name="groupItemName"
                      placeholder="Translation group item name"
                      onChange={(e) => setKeyValue(e.target.value)}
                    />
                    <FormControl.HelpText>
                      Provide a translation group item name
                    </FormControl.HelpText>
                    {keyValue && !isKeyFieldValid(keyValue) && (
                      <FormControl.ValidationMessage>
                        Invalid translation group item name!
                        <br />- Should start with an alphabetic character,
                        <br />- Should end with an alphanumeric character,
                        <br />- Can only contain lowecase alphanumeric
                        characters ("a-z", "0-9"), underscore "_" or hyphen "-",
                        <br />
                        No spaces allowed.
                      </FormControl.ValidationMessage>
                    )}
                    {isFieldDuplicate(keyValue) && (
                      <FormControl.ValidationMessage>
                        Translation group name already exists.
                      </FormControl.ValidationMessage>
                    )}
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
                    onClick={addFieldToGroup}
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
