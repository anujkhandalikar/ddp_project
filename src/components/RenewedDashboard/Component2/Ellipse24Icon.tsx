import { memo, SVGProps } from 'react';

const Ellipse24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={4.68346} cy={4.2372} rx={4.04317} ry={3.24345} fill='#585858' />
  </svg>
);

const Memo = memo(Ellipse24Icon);
export { Memo as Ellipse24Icon };
