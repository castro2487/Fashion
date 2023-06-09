import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgList = ({
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
      d="M17.398 14.5H8.695L8 15l.695.5h8.698L18 15l-.602-.5ZM17.398 11.5H8.695L8 12l.695.5h8.698L18 12l-.602-.5ZM17.398 8.5H8.695L8 9l.695.5h8.698L18 9l-.602-.5ZM6.508 11.5 7 12l-.492.5L6 12l.508-.5ZM6.508 14.5 7 15l-.492.5L6 15l.508-.5ZM6.508 8.5 7 9l-.492.5L6 9l.508-.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgList;
