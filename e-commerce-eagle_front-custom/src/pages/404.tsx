import Error from 'next/error';

export default function Error404() {
  return (
    <Error
      statusCode={404}
      withDarkMode={true}
      title="Page Not Found (THIS WILL BE MADE BEAUTIFUL LATER)"
    />
  );
}
