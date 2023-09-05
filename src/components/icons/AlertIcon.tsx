import { COLORS } from '@/constants/theme';
import { IconProps } from '@/types/icons';

const AlertIcon = ({ color = COLORS.DANGER_60, ...props }: IconProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_2908_8777)">
        <rect x="3.33301" y="3.33325" width="13.3333" height="13.3333" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM9.16667 5C9.16667 4.53976 9.53976 4.16667 10 4.16667C10.4602 4.16667 10.8333 4.53976 10.8333 5V10.8333C10.8333 11.2936 10.4602 11.6667 10 11.6667C9.53976 11.6667 9.16667 11.2936 9.16667 10.8333V5ZM11.25 14.5833C11.25 15.2737 10.6904 15.8333 10 15.8333C9.30964 15.8333 8.75 15.2737 8.75 14.5833C8.75 13.8931 9.30938 13.3336 9.99951 13.3333C10.6904 13.3333 11.25 13.893 11.25 14.5833Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2908_8777">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertIcon;
