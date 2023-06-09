import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilter = ({
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
      d="M16.398 9H7.695L7 9.5l.695.5h8.698L17 9.5l-.602-.5ZM15.398 12H8.695L8 12.5l.695.5h6.698l.607-.5-.602-.5ZM13.398 15h-2.703l-.695.5.695.5h2.698l.607-.5-.602-.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFilter;
