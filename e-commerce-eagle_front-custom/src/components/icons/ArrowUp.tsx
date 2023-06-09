import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUp = ({
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
      d="m8.45 10.229 3.182-3.183.354-.346.353.346 3.182 3.183-.707.707-2.329-2.329V17.4h-1V8.607l-2.328 2.329-.707-.707Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowUp;
