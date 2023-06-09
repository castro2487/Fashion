import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColFive = ({
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
      d="M4 7.5h16v9H4v-9Zm9 8v-7h-2v7h2Zm1 0h2v-7h-2v7Zm3 0h2v-7h-2v7Zm-7 0v-7H8v7h2Zm-5-7h2v7H5v-7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgColFive;
