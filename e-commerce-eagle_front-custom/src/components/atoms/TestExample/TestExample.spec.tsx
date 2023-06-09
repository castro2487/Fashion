import { render, screen } from '@testing-library/react';
import { TestExample } from '@atoms/TestExample/TestExample';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('TestExample Component', () => {
  it('renders the correct price with no discount', () => {
    const initialPrice = 99;
    render(<TestExample price={99} />);

    const testId = screen.getByTestId('test');
    const price = screen.getByText(initialPrice);

    expect(testId).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('renders the correct discounted price', () => {
    const initialPrice = 101;
    const expectedPrice = initialPrice - 10;
    render(<TestExample price={initialPrice} />);

    const testId = screen.getByTestId('test');
    const price = screen.getByText(expectedPrice);

    expect(testId).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
