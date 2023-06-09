import React, { useState } from 'react';
import {
  Modal,
  Stack,
  Checkbox,
  FormControl,
  Button,
  Note,
} from '@contentful/f36-components';

export const ModalRemoveGroup = ({
  translations,
  setTranslations,
  groupName,
}) => {
  const [isShown, setShown] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);

  const removeFieldFromGroup = () => {
    if (translations[groupName]) {
      setTranslations((state) => {
        const newState = { ...state, [groupName]: {} };

        delete newState[groupName];
        return newState;
      });
      onClose();
    }
  };

  const onClose = () => {
    setCheckboxState(false);
    setShown(false);
  };

  return (
    <>
      <Button variant="secondary" size="small" onClick={() => setShown(true)}>
        Remove translation group
      </Button>
      <Modal onClose={onClose} isShown={isShown}>
        {() => (
          <>
            <Modal.Header
              title={`Remove Translation Group`}
              onClose={onClose}
            />
            <Modal.Content>
              <FormControl isRequired isInvalid={checkboxState}>
                <Note variant="warning">
                  Warning! This will remove all the translations in this group{' '}
                  <strong>{groupName}</strong>.
                </Note>
                <br />
                <Checkbox
                  name="confirm-remove-group"
                  id="confirm-remove-group"
                  isChecked={checkboxState}
                  onChange={() => setCheckboxState(!checkboxState)}
                >
                  I acknowledge, this will remove all the translations in this
                  group.
                </Checkbox>
                <Stack
                  paddingTop="spacingXl"
                  justifyContent="space-between"
                  fullWidth
                  flexDirection="row"
                >
                  <Button onClick={onClose}>Cancel</Button>

                  <Button
                    variant="negative"
                    onClick={removeFieldFromGroup}
                    isDisabled={!checkboxState}
                  >
                    Remove
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
