import { IconProps } from '@/types/icons';

const SuccessIcon = (props: IconProps) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_2594_16303)">
        <rect x="8" y="8" width="32" height="32" fill="white" />
        <path
          d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM35 14L20 29L15 24L12 27L20 35L38 17L35 14Z"
          fill="#1D8731"
        />
      </g>
      <defs>
        <clipPath id="clip0_2594_16303">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SuccessIcon;
