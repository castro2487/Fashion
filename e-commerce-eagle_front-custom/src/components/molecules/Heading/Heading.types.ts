import { Header } from './Heading.styles';

declare module '@amq' {
  interface HeadingProps
    extends Omit<React.ComponentProps<typeof Header>, 'gap' | 'margin'> {
    title?: string;
    htmlHeadingTag?: 'h1' | 'h2' | 'h3' | 'h4';
    subtitle?: string;
    highlightTag?: string;
  }
}
