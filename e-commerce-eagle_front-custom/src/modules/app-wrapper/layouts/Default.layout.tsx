import { PropsWithChildren } from 'react';
import { Region } from '@components/functional/Region/Region';

type TDefaultLayout = {
  page: IPage;
} & PropsWithChildren;

const DefaultLayout = ({ children, page }: TDefaultLayout) => {
  return (
    <>
      <Region region={page?.regions?.topRegion} />
      <main>{children}</main>
      <Region region={page?.regions?.bottomRegion} />
    </>
  );
};

export default DefaultLayout;
