import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDown = ({
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
      d="m15.5 13.771-3.182 3.182-.354.347-.353-.347-3.182-3.181.707-.708 2.329 2.329V6.6h1v8.793l2.328-2.329.707.707Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowDown;
