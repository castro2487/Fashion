import React from 'react';
import { Note, Flex } from '@contentful/f36-components';

export const SingleLocaleWarning = () => {
  return (
    <Flex marginTop="spacingXl" justifyContent="center">
      <Note variant="negative">
        You can edit the translations per single locale only, please select a
        specific language.
      </Note>
    </Flex>
  );
};
