import { memo, SVGProps } from 'react';

const Chart1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 771 162' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.31543 161.276C43.1109 124.307 85.9063 87.3371 128.702 93.0509C171.497 98.7646 214.293 147.162 257.088 141.377C299.884 135.592 342.679 75.626 385.475 72.2042C428.27 68.7824 471.065 121.905 513.861 111.055C556.656 100.204 599.452 25.3803 642.247 5.87404C685.043 -13.6322 727.838 22.1792 770.634 57.9906'
      stroke='#57DACC'
      strokeWidth={6.11364}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Chart1Icon);
export { Memo as Chart1Icon };
