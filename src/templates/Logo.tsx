import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '32' : '24';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const router = useRouter();
  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}
      <img
        src={`${router.basePath}/assets/images/hotel.svg`}
        width={size}
        height={size}
        alt="Icono Hotel"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
