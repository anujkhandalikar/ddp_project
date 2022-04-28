import { memo, SVGProps } from 'react';

const Ellipse16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={5.36212} cy={4.03119} rx={4.71698} ry={3.78403} fill='#585858' />
  </svg>
);

const Memo = memo(Ellipse16Icon);
export { Memo as Ellipse16Icon };
