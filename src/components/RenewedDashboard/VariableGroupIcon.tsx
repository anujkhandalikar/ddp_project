import { memo, SVGProps } from 'react';

const VariableGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 334 823' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={334} height={823} rx={19.2262} fill='white' />
  </svg>
);

const Memo = memo(VariableGroupIcon);
export { Memo as VariableGroupIcon };
