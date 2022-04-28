import { memo, SVGProps } from 'react';

const FileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.3775 5L10.9425 7.5575L11.3775 8H21V20H3V5H8.3775ZM8.3775 3.5H3C2.60218 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V20C1.5 20.3978 1.65804 20.7794 1.93934 21.0607C2.22064 21.342 2.60218 21.5 3 21.5H21C21.3978 21.5 21.7794 21.342 22.0607 21.0607C22.342 20.7794 22.5 20.3978 22.5 20V8C22.5 7.60218 22.342 7.22065 22.0607 6.93934C21.7794 6.65804 21.3978 6.5 21 6.5H12L9.4425 3.9425C9.30296 3.80212 9.13701 3.69075 8.95423 3.61481C8.77144 3.53886 8.57543 3.49984 8.3775 3.5V3.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(FileIcon);
export { Memo as FileIcon };
