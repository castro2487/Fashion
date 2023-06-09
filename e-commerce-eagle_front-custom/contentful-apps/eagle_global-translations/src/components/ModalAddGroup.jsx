import React, { useState } from 'react';
import {
  Modal,
  Stack,
  TextInput,
  FormControl,
  Button,
} from '@contentful/f36-components';
import { KEY_VALIDATION } from '../shared';

export const ModalAddGroup = ({ translations, setTranslations }) => {
  const [isShown, setShown] = useState(false);
  const [value, setValue] = useState('');

  const addFieldToGroup = () => {
    if (!isFieldDuplicate(value)) {
      setTranslations((state) => ({ ...state, [value]: {} }));
      onClose();
    }
  };

  const isFieldValid = (v) => KEY_VALIDATION.test(v);
  const isFieldDuplicate = (v) => !!translations[v];
  const onClose = () => {
    setValue('');
    setShown(false);
  };

  return (
    <>
      <Button variant="primary" size="small" onClick={() => setShown(true)}>
        New translation group
      </Button>
      <Modal onClose={onClose} isShown={isShown}>
        {() => (
          <>
            <Modal.Header title="Add new translation group" onClose={onClose} />
            <Modal.Content>
              <FormControl isRequired isInvalid={value && !isFieldValid(value)}>
                <FormControl.Label>Translation group name</FormControl.Label>
                <TextInput
                  value={value}
                  type="text"
                  name="groupName"
                  placeholder="Translation group name"
                  onChange={(e) => setValue(e.target.value)}
                />
                <FormControl.HelpText>
                  Provide a translation group name
                </FormControl.HelpText>
                {value && !isFieldValid(value) && (
                  <FormControl.ValidationMessage>
                    Invalid translation group name!
                    <br />- Should start with an alphabetic character,
                    <br />- Should end with an alphanumeric character,
                    <br />- Can only contain lowecase alphanumeric characters
                    ("a-z", "0-9"), underscore "_" or hyphen "-",
                    <br />
                    No spaces allowed.
                  </FormControl.ValidationMessage>
                )}
                {isFieldDuplicate(value) && (
                  <FormControl.ValidationMessage>
                    Translation group name already exists.
                  </FormControl.ValidationMessage>
                )}
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
