import { DynamicComponentLoader } from '@functional/DynamicComponentLoader/DynamicComponentLoader';

type TRegionProps = {
  region?: IRegion;
};

const loadComponents = (components: IDynamicComponent[]) =>
  components.map((component, i: number) => (
    <DynamicComponentLoader key={i} component={component} />
  ));

const loadRegions = (regions: IRegion[]) =>
  regions.map((subRegion, i) => <Region key={i} region={subRegion} />);

export const Region = ({ region }: TRegionProps) => {
  return (
    <>
      {region?.subRegions && loadRegions(region.subRegions)}
      {region?.components && loadComponents(region.components)}
    </>
  );
};
