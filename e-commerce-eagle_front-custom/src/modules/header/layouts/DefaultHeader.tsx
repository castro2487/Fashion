import { HeaderBar } from '@organisms/HeaderBar';
import { useState } from 'react';

import { HeaderProps } from '@amq';

export const DefaultHeader = ({ navigation }: HeaderProps): JSX.Element => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderBar
        // TODO: Shall we add option to CF to handle type value
        // TODO: We need to change type depends of the background color behind the header
        type="light"
        navigation={navigation}
        account={<></>}
        hidden={false}
        search={<></>}
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
      />
    </>
  );
};
