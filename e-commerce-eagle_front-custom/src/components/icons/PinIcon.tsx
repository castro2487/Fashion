import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={30}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m25.809 24.666-.746.833h.067l-9.525 10.647L5.273 25.755l-.009-.01-.01-.008a14.585 14.585 0 0 1-1.048-1.054l-.008-.01-.007-.007A14.444 14.444 0 0 1 .5 15C.5 6.992 6.992.5 15 .5S29.5 6.992 29.5 15c0 3.714-1.395 7.1-3.691 9.666Z"
      fill="currentColor"
      stroke="#727272"
    />
  </svg>
);
export default SvgPinIcon;
