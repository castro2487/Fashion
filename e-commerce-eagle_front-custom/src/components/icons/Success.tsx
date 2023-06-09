import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSuccess = ({
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
      d="M20 4H4v16h16V4Zm-8.853 11 4.534-4.408-.576-.592-3.958 3.848-2.071-2.013-.576.592L11.147 15Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSuccess;
