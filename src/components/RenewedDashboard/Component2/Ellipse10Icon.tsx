import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={5.30457} cy={4.03119} rx={4.71704} ry={3.78403} fill='#585858' />
  </svg>
);

const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
