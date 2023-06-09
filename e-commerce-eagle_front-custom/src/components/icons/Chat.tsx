import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChat = ({
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
      d="M15.907 9.19a1.095 1.095 0 1 0 0-2.19 1.095 1.095 0 0 0 0 2.19ZM6.5 7.767h7.123a2.33 2.33 0 0 0 .084 1H7v6.612l2.34-1.697.13-.095h6.24v-3.234a2.209 2.209 0 0 0 1-.174V14.588H9.795l-3.001 2.177-.794.576V7.768h.5Zm8.28.31a1.1 1.1 0 0 0 .245.691 1.089 1.089 0 0 1-.245-.692Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgChat;
