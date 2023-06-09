import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { DynamicComponentLoader } from './DynamicComponentLoader';

jest.mock('../DynamicComponentsMap/DynamicComponentsMap', () => ({
  __esModule: true,
  DynamicComponentsMap: {
    ExampleComponent: ({ text }: { text: string }) => {
      return <p>{text}</p>;
    },
  },
}));

describe('DynamicComponentLoader Component', () => {
  it('should load correct component based on component ID', () => {
    const component = {
      componentType: 'ExampleComponent',
      componentId: 'ComponentId',
      data: {
        text: 'AMQ',
      },
    };
    render(<DynamicComponentLoader component={component} />);
    expect(screen.getByText('AMQ'));
  });

  it('should load error info component if ', () => {
    const component = {
      componentType: 'someNonExistingType',
      componentId: 'someId',
      data: {
        text: 'AMQ',
      },
    };
    render(<DynamicComponentLoader component={component} />);
    expect(
      screen.getByText(
        'someNonExistingType: Error: CMS component type does not match with UI component data entry ID: someId'
      )
    );
  });
});
