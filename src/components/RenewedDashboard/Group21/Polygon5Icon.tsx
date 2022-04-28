import { memo, SVGProps } from 'react';

const Polygon5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.7684 9.94711C6.45472 10.512 5.64233 10.512 5.32865 9.94711L2.27307 4.44436C1.96831 3.89554 2.36518 3.22122 2.99294 3.22122L9.10411 3.22122C9.73187 3.22122 10.1287 3.89554 9.82399 4.44436L6.7684 9.94711Z'
      fill='#6674BB'
    />
  </svg>
);

const Memo = memo(Polygon5Icon);
export { Memo as Polygon5Icon };
