interface IExampleComponent {
  text: string;
}

export const ExampleComponent = ({ text }: IExampleComponent) => {
  return <p>{text}</p>;
};
