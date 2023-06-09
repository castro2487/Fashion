import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from '@testing-library/react';
import { Region } from './Region';

describe('Region Component', () => {
  it('should render components and regions', async () => {
    const region = {
      subRegions: [
        {
          components: [
            {
              componentType: 'ExampleComponent',
              componentId: 'someId',
              data: {
                text: 'It loads component per region!',
              },
            },
          ],
        },
      ],
      components: [
        {
          componentType: 'ExampleComponent',
          componentId: 'someId',
          data: {
            text: 'It loads component!',
          },
        },
      ],
    };
    await act(() => {
      render(<Region region={region} />);
    });
    expect(screen.getAllByText('It loads component!'));
  });
  it('should not render if there is no components or regions', async () => {
    await act(() => {
      render(<Region />);
    });
    expect(screen.getAllByText(''));
  });
});
