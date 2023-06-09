export class ContentfulBynderImage implements IContentfulBynderImageProps {
  src!: string;
  alt!: string;

  constructor(data: TContentfulBynderImageData) {
    if (!data) return;
    const { fields } = data;
    const { imageUrl, imageAltText } = fields;
    this.src = imageUrl;
    this.alt = imageAltText;
  }
}
