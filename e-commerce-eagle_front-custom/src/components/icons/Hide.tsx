import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHide = ({
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
      d="M17.694 14.355 20.834 12 12 5.375 8.876 7.718l.832.626L12 6.625 19.167 12l-2.305 1.729.832.626Zm-3.749-2.821a2 2 0 0 0-2.035-1.532l2.035 1.532ZM6.377 9.592 3.167 12 12 18.625l3.195-2.396-.832-.626L12 17.375 4.833 12l2.376-1.782-.832-.626Zm9.65 6.012-.831-.626.832.626Zm-2.747-2.068-3.111-2.341 3.111 2.341Zm-3.251-1.195a2 2 0 0 0 2.189 1.647l-2.19-1.647ZM8.042 9.594l-.832-.626.832.626Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1 16.665 4.157 5.418 3.3 5.4l.254.818 14.94 11.244.785-.035-.18-.761Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHide;
