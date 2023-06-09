import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColFour = ({
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
      d="M5.5 7.5h13v9h-13v-9Zm9 8v-7h-2v7h2Zm1 0h2v-7h-2v7Zm-4 0v-7h-2v7h2Zm-5-7h2v7h-2v-7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgColFour;
