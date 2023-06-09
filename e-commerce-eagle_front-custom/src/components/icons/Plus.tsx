import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlus = ({
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
      d="M12.525 7.51v4.027h4.02l.455.468-.456.48h-4.02v3.973L12 17l-.527-.542v-3.973H7.516L7 12.011l.516-.474h3.956V7.511L12 7l.526.51Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlus;
