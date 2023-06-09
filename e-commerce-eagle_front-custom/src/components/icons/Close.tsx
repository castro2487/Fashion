import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClose = ({
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
      d="m9.268 8.455 2.847 2.847 2.842-2.843.653.01.017.661-2.842 2.842 2.81 2.81.01.755-.754-.011-2.81-2.81-2.798 2.798-.7.03.03-.7 2.798-2.798-2.847-2.847.01-.733.734-.011Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClose;
