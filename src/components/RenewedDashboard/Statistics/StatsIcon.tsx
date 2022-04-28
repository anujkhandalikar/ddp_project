import { memo, SVGProps } from 'react';

const StatsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21 21.5H3V19.5H21V21.5ZM8 10.5H4V17.5H8V10.5ZM14 3.5H10V17.5H14V3.5ZM20 6.5H16V17.5H20V6.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(StatsIcon);
export { Memo as StatsIcon };
