import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeart = ({
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
      d="m12.311 9.328-.51 1.213-.563-1.188C10.58 7.967 9.609 7.37 8.734 7.268c-.893-.102-1.73.302-2.182 1.024-.44.701-.584 1.82.144 3.28.706 1.415 2.223 3.12 5.006 4.93l.067.044.067-.044c2.78-1.81 4.275-3.513 4.956-4.924.703-1.455.538-2.575.078-3.285a2.302 2.302 0 0 0-2.201-1.031c-.852.1-1.779.69-2.358 2.066Zm-.847 8.48.305.192.304-.191c3.123-1.963 4.926-3.906 5.777-5.668.86-1.78.748-3.396 0-4.549a3.466 3.466 0 0 0-3.313-1.569c-.998.117-1.966.669-2.695 1.687l-.097.135-.1-.132c-.778-1.018-1.773-1.567-2.782-1.683a3.414 3.414 0 0 0-3.301 1.576c-.727 1.16-.8 2.774.084 4.545.876 1.756 2.696 3.696 5.818 5.658Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeart;
