import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeft = ({
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
      d="m10.828 15-3.182-3.182-.346-.354.346-.353 3.182-3.182.708.707-2.329 2.329H18v1H9.207l2.329 2.328-.708.707Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowLeft;
