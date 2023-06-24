import { layoutModes, primaryColors } from "@/constants/modes";
import { CloseIcon, SettingsIcon } from "@/utils/medias";
import { useTheme } from "next-themes";
import { FC, useState } from "react";

const ModeSettings: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleOpenSettings = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Settings */}
      <div
        className={`fixed right-0 top-1/2 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        } transition-transform duration-300 -translate-y-1/2 p-2 border-l border-t border-b cursor-pointer rounded-tl-md rounded-bl-md group`}
        onClick={toggleOpenSettings}
      >
        <div className="group-hover:animate-spin">
          <SettingsIcon width={24} height={24} />
        </div>
      </div>

      {/* Setting drawer */}
      <div
        className={`fixed top-16 right-0 bottom-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 delay-100 dark:bg-slate-950 rounded-tl-md rounded-bl-md z-50 min-w-[280px] border`}
      >
        <div className="p-4 flex items-end justify-between border-b">
          <h1 className="text-lg font-bold">Settings</h1>
          <div
            className="cursor-pointer hover:text-green-500"
            onClick={toggleOpenSettings}
          >
            <CloseIcon width={24} height={24} />
          </div>
        </div>
        <div className="p-4 space-y-8">
          <div>
            <h2 className="mb-2 text-xs font-medium">Mode</h2>
            <div className="grid grid-cols-2 gap-4">
              {layoutModes.map((mode) => (
                <div
                  key={mode.id}
                  className={`w-full flex items-center justify-center h-20 border rounded-md cursor-pointer dark:border-stone-500 dark:hover:bg-gray-900${
                    mode.value === theme && theme === "dark"
                      ? " !bg-gray-900"
                      : ""
                  }`}
                  onClick={() => setTheme(mode.value)}
                >
                  {mode.icon}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xs font-medium">Primary Color</h2>
            <div className="grid grid-cols-3 gap-4">
              {primaryColors.map((color) => (
                <div
                  key={color.id}
                  className="w-full flex items-center justify-center h-14 border rounded-md cursor-pointer dark:border-stone-500 dark:hover:bg-gray-900"
                >
                  <div className={`w-3 h-3 rounded-full ${color.color}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg"
      >
        Toggle ModeSettings
      </button> */}
    </div>
  );
};

export default ModeSettings;
