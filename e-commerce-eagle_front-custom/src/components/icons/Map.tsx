import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMap = ({
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
      d="M17 7.781 13.5 7l-3.131 1.38L7 7.617v8.504l3.5.88 3.131-1.48 3.369.765V7.78Zm-4 6.937v-6.45l-2 .915v6.45l2-.915Zm1-.13 2 .454V8.57l-2-.454v6.472Zm-6-5.73 2 .455v6.472l-2-.454V8.859Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMap;
