import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeOn = ({
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
      d="M13 6v11.873L8.081 14.58H4V9.294h4.081L13 6Zm-1 1.873-3.615 2.42H5v3.286h3.385L12 16V7.873Zm2.646 5.773c.91-.909.91-2.383 0-3.292l.708-.708c1.3 1.3 1.3 3.408 0 4.708l-.708-.708Zm2.5-5.292a5.157 5.157 0 0 1 0 7.292l.708.708a6.157 6.157 0 0 0 0-8.708l-.708.708Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgVolumeOn;
