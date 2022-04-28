import { memo, SVGProps } from 'react';

const LogOutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.00002 21.125H5.00002C4.46959 21.125 3.96088 20.9143 3.58581 20.5392C3.21073 20.1641 3.00002 19.6554 3.00002 19.125V5.125C3.00002 4.59457 3.21073 4.08586 3.58581 3.71079C3.96088 3.33571 4.46959 3.125 5.00002 3.125H9.00002M21 12.125L16 17.125L19.875 12.125L16 7.125L21 12.125ZM21 12.125C21 12.125 13.6863 12.125 9.00002 12.125'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(LogOutIcon);
export { Memo as LogOutIcon };
