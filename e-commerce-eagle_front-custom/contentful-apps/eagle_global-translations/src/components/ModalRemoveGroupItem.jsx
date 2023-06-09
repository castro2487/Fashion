import React from 'react';
import { Note, ModalConfirm, Text } from '@contentful/f36-components';
import styles from '../styles';

export const ModalRemoveGroupItem = ({
  translations,
  setTranslations,
  deleteData,
  isShown,
  setShown,
}) => {
  const removeFieldFromGroupItem = () => {
    if (
      translations[deleteData.groupName] &&
      translations[deleteData.groupName][deleteData.translationKey]
    ) {
      setTranslations((state) => {
        const newState = { ...state };

        delete newState[deleteData.groupName][deleteData.translationKey];
        return newState;
      });
    }

    onClose();
  };

  const onClose = () => {
    setShown(false);
  };

  return (
    <>
      <ModalConfirm
        intent="negative"
        isShown={isShown}
        onCancel={onClose}
        onConfirm={removeFieldFromGroupItem}
        onClose={onClose}
      >
        <Text className={styles.spaceBottom}>
          Do you really want to delete this translation key and value?
        </Text>
        <Note variant="warning">
          {deleteData && (
            <strong>{`${deleteData.groupName}:${deleteData.translationKey}`}</strong>
          )}
        </Note>
      </ModalConfirm>
    </>
  );
};
