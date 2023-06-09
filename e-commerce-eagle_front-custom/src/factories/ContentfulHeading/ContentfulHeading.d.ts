interface IContentfulHeadingFactory extends IFactory {
  _sampleName?: string;
  _referenceFieldData: ContentfulEntryProps<IContentfulHeadingResponseFields>;
}

interface IContentfulHeadingResponseFields {
  title: string;
  subtitle: string;
  label: string;
}
