import { memo, SVGProps } from 'react';

const Ellipse30Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={4.68346} cy={3.24844} rx={4.04317} ry={3.24345} fill='#585858' />
  </svg>
);

const Memo = memo(Ellipse30Icon);
export { Memo as Ellipse30Icon };
