import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLanguage = ({
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
      d="M5 5.3h14v10h-4.732l-1.852 2.777-.416.624-.416-.624L9.732 15.3H5v-10Zm1 1v8h4.268l.148.223L12 16.899l1.584-2.376.148-.223H18v-8H6Z"
      fill="currentColor"
    />
    <path
      d="M10.716 12.3H10l1.61-4h.78l1.61 4h-.716l-1.265-3.273h-.035L10.716 12.3Zm.12-1.566h2.325v.508h-2.324v-.508Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLanguage;
