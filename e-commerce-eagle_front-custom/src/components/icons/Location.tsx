import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocation = ({
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
      d="m15.475 7.006-2.042 11.56-1.803-4.9-5.146.889 8.99-7.549Zm-5.511 5.933 2.317-.4.811 2.206.92-5.205-4.048 3.399Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLocation;
