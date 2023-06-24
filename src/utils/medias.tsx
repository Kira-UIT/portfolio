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
    height={24}
    width={24}
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

export { CloseIcon, MoonIcon, SettingsIcon, SunIcon };
