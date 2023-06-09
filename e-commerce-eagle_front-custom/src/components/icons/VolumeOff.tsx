import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeOff = ({
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
      d="M13 17.873V6L8.081 9.294H4v5.285h4.081L13 17.873Zm-4.615-7.58L12 7.874V16l-3.615-2.42H5v-3.286h3.385Zm9.73 1.08-2.847-2.847-.734.01-.01.734 2.847 2.847-2.798 2.797-.03.7.7-.03 2.798-2.797 2.81 2.81.755.01-.011-.754-2.81-2.81 2.842-2.842-.017-.662-.652-.009-2.843 2.843Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgVolumeOff;
