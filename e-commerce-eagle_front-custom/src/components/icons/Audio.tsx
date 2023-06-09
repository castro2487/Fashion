import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAudio = ({
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
      d="M7 17v-6.5l.5-.5.5.5V17H7ZM16 17v-6.5l.5-.5.5.5V17h-1ZM13 17V9.5l.5-.5.5.5V17h-1ZM10 17V7.5l.5-.5.5.5V17h-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAudio;
