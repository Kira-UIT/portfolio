interface IIconProps {
  height?: number;
  width?: number;
}

const SunIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1.5v1.575"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      stroke="none"
      d="M19.425 4.575 18.31 5.69l1.114-1.114Z"
      clipRule="evenodd"
    ></path>
    <path d="M19.425 4.575 18.31 5.69"></path>
    <path d="M22.5 12h-1.575"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      stroke="none"
      d="m19.425 19.424-1.114-1.113 1.114 1.113Z"
      clipRule="evenodd"
    ></path>
    <path d="m19.425 19.424-1.114-1.113"></path>
    <path d="M12 22.5v-1.575"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      stroke="none"
      d="m4.575 19.424 1.114-1.113-1.114 1.113Z"
      clipRule="evenodd"
    ></path>
    <path d="m4.575 19.424 1.114-1.113"></path>
    <path d="M1.5 12h1.575"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      stroke="none"
      d="M4.575 4.575 5.69 5.69 4.575 4.575Z"
      clipRule="evenodd"
    ></path>
    <path d="M4.575 4.575 5.69 5.69"></path>
    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
  </svg>
);

const MoonIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.026 2.205a6.364 6.364 0 1 0 7.768 7.768c.135.655.206 1.333.206 2.027 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.694 0 1.372.07 2.026.205Z"></path>
  </svg>
);

const SettingsIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    height={width}
    width={height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.723 1.723 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065Z"></path>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
  </svg>
);

const CloseIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
  </svg>
);

const RightArrowIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    aria-hidden="true"
    className="-mr-1 ml-2 h-4 w-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const TopArrowIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 10v10"></path>
    <path d="m12 10 4 4"></path>
    <path d="m12 10-4 4"></path>
    <path d="M4 4h16"></path>
  </svg>
);

const MenuIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 18h13v-2H3v2Zm0-5h10v-2H3v2Zm0-7v2h13V6H3Zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59Z"></path>
  </svg>
);

const EducationIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <span className="text-primary transition-colors duration-500 ease-linear">
    <svg
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72Z"></path>
    </svg>
  </span>
);

const BusinessIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12 7h10v14H2V3h10v4ZM4 19h2v-2H4v2Zm2-4H4v-2h2v2Zm-2-4h2V9H4v2Zm2-4H4V5h2v2Zm2 12h2v-2H8v2Zm2-4H8v-2h2v2Zm-2-4h2V9H8v2Zm2-4H8V5h2v2Zm10 12V9h-8v2h2v2h-2v2h2v2h-2v2h8Zm-2-8h-2v2h2v-2Zm-2 4h2v2h-2v-2Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const LinkIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"></path>
    <path d="M10 14 20 4"></path>
    <path d="M15 4h5v5"></path>
  </svg>
);

const MajorIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M9 5H5v4H3V5c0-1.1.9-2 2-2h4v2ZM3 15h2v4h4v2H5c-1.1 0-2-.9-2-2v-4ZM19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2Zm-4 16h4v-4h2v4c0 1.1-.9 2-2 2h-4v-2ZM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const DurationIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <span className="text-2xl">
    <svg
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7Z"></path>
    </svg>
  </span>
);

const FireIcon = ({ width = 32, height = 32 }: IIconProps) => (
  <svg
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.482 12.602c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55-3.63 2.14-6.24 6.43-4.05 12.05.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34-.68 1.04-1.37 2.72-1.37 5.25.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69Zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32Z"></path>
  </svg>
);

export {
  BusinessIcon,
  CloseIcon,
  DurationIcon,
  EducationIcon,
  FireIcon,
  MajorIcon,
  MenuIcon,
  MoonIcon,
  LinkIcon,
  RightArrowIcon,
  SettingsIcon,
  SunIcon,
  TopArrowIcon,
};
