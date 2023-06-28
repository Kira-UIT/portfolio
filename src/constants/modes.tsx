import { MoonIcon, SunIcon } from "@/utils/medias";

export const layoutModes = [
  {
    id: 1,
    icon: <SunIcon height={24} width={24} />,
    value: "light",
  },
  {
    id: 2,
    icon: <MoonIcon height={24} width={24} />,
    value: "dark",
  },
];
