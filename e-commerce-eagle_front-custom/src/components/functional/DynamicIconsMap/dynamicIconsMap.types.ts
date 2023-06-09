declare module '@amq' {
  interface SVGRProps {
    title?: string;
    titleId?: string;
  }

  type DynamicIconProps = React.SVGProps<SVGSVGElement> & SVGRProps;
}
export {};
