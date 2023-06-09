import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent Component', () => {
  it('renders correctly', () => {
    const testProps = 'Foo bar';
    render(<ExampleComponent text={testProps} />);
  });
});
