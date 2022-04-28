import { memo, SVGProps } from 'react';

const Ellipse11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={5.64748} cy={4.03119} rx={4.71703} ry={3.78403} fill='#585858' />
  </svg>
);

const Memo = memo(Ellipse11Icon);
export { Memo as Ellipse11Icon };
