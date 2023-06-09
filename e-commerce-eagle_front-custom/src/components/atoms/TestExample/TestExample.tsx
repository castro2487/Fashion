interface TestProps {
  price: number;
}

// dummy component for react testing library showcase
export const TestExample = ({ price }: TestProps) => {
  const finalPrice = price > 100 ? price - 10 : price; // apply discount
  return <div data-testid="test"> {finalPrice} </div>;
};
