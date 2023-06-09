type TContentfulBynderImageUnmapped = {
  imageUrl: string;
  imageAltText: string;
};

type TContentfulBynderImageData =
  ContentfulEntryProps<TContentfulBynderImageUnmapped>;

interface IContentfulBynderImageProps {
  src: string;
  alt: string;
}
