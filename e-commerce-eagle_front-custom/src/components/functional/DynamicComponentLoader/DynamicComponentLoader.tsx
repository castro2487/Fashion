import { DynamicComponentsMap } from '@functional/DynamicComponentsMap/DynamicComponentsMap';

export const ERROR_COMPONENT_LOADER =
  'Error: CMS component type does not match with UI component';
import { TDynamicComponentLoaderProps } from '@amq';

export const DynamicComponentLoader = ({
  component,
}: TDynamicComponentLoaderProps) => {
  const { componentType, componentId, data } = component;
  const Component = DynamicComponentsMap[componentType];
  if (!Component) {
    return (
      <p>
        <code>
          {componentType}: {ERROR_COMPONENT_LOADER} data entry ID: {componentId}
        </code>
      </p>
    );
  }
  return (
    <Component
      componentType={componentType}
      componentId={componentId}
      {...data}
    />
  );
};
