import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWorld = ({
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
    <circle cx={12} cy={12} r={6.5} stroke="currentColor" />
    <path
      d="M6 11.5a.5.5 0 0 0-1 0h1Zm12.053-.724c-.163.326-.71.788-1.745 1.172-1.005.372-2.382.635-4.058.635v1c1.776 0 3.273-.278 4.406-.697 1.102-.409 1.954-.988 2.291-1.662l-.894-.448Zm-5.803 1.807c-1.712 0-3.362-.107-4.571-.35-.61-.122-1.07-.272-1.366-.437-.31-.173-.313-.285-.313-.296H5c0 .564.41.938.826 1.17.43.24 1.01.414 1.656.543 1.303.262 3.028.37 4.768.37v-1Z"
      fill="currentColor"
    />
    <path
      d="M12 5.5c2.124 0 3.5 3.548 3.5 7s-1.376 6-3.5 6M12 5.5c-1.657 0-3 3.433-3 7.052 0 3.619 1.343 5.948 3 5.948"
      stroke="currentColor"
    />
  </svg>
);
export default SvgWorld;
