import { StyledContainer } from './CompleteTheLook.styles';

declare module '@amq' {
  export interface CompleteTheLookProps
    extends React.ComponentProps<typeof StyledContainer> {
    id: string;
    title: string;
    look: ImageProps;
    children: React.ReactNode;
  }
}
