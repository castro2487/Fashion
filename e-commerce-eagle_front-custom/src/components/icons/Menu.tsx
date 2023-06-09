import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenu = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7 9.5.5-.5h9l.5.5-.5.5h-9L7 9.5Zm0 4 .5-.5h9l.5.5-.5.5h-9l-.5-.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMenu;
