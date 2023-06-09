import { Document } from '@contentful/rich-text-types';
import { RichText } from '@components/molecules/RichText';

interface NewsletterContentProps {
  newsletterDescription: Document;
}

export const NewsletterContent = ({
  newsletterDescription,
}: NewsletterContentProps) => {
  return (
    <div style={{ padding: 'var(---paddingValue)' }}>
      <RichText data={newsletterDescription} />
    </div>
  );
};
