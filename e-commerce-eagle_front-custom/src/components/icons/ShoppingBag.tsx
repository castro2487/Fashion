import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShoppingBag = ({
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
      d="M10.5 9a1.5 1.5 0 0 1 3 0h1a2.5 2.5 0 0 0-5 0h1ZM7 17v-6h10v6H7Zm-1-7v8h12v-8H6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgShoppingBag;
