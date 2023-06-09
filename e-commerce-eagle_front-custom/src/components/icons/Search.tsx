import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearch = ({
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
      d="M14.29 11.29a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-.547 3.16a4 4 0 1 1 .707-.707l2.192 2.192.073.78-.783-.076-2.19-2.19Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearch;
