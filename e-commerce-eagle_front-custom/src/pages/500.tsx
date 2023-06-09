import Error from 'next/error';

export default function Error404() {
  return (
    <Error
      statusCode={500}
      withDarkMode={true}
      title="Internal Error (THIS WILL BE MADE BEAUTIFUL LATER)"
    />
  );
}
