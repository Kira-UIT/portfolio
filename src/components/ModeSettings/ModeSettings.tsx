import { layoutModes } from "@/constants/modes";
import { CloseIcon, SettingsIcon } from "@/utils/medias";
import { useTheme } from "next-themes";
import { FC, FocusEvent, useRef, useState } from "react";

interface IModeSettingsProps {
  setPreset: any;
}

const ModeSettings: FC<IModeSettingsProps> = (props) => {
  const { setPreset } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const blurHandler = (e: any) => {
    setIsOpen(false);
    console.log(e);
  };
  const toggleOpenSettings = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Settings */}
      <div
        className={`fixed right-0 top-1/2 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        } group -translate-y-1/2 cursor-pointer rounded-bl-md rounded-tl-md border-b border-l border-t p-1 transition-transform duration-300 dark:bg-zinc-900`}
        onClick={toggleOpenSettings}
      >
        <div className="group-hover:animate-spin">
          <SettingsIcon width={20} height={20} />
        </div>
      </div>

      {/* Setting drawer */}
      <div
        onBlur={(e) => blurHandler}
        className={`fixed right-0 top-1/2 -translate-y-1/2 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 min-w-[280px] rounded-bl-md rounded-tl-md border-b border-l border-t bg-slate-50 transition-all duration-300 ease-linear dark:bg-zinc-900`}
      >
        <div className="flex items-end justify-between border-b p-4">
          <h1 className="text-lg font-bold">Settings</h1>
          <div
            className="cursor-pointer hover:text-primary"
            onClick={toggleOpenSettings}
          >
            <CloseIcon width={24} height={24} />
          </div>
        </div>
        <div className="space-y-8 p-4">
          <div>
            <h2 className="mb-2 text-xs font-medium">Mode</h2>
            <div className="grid grid-cols-2 gap-4">
              {layoutModes.map((mode) => (
                <div
                  key={mode.id}
                  className={`flex h-20 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-100 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800`}
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
              <div
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-300 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800"
                onClick={() => setPreset("preset-green")}
              >
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-300 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800"
                onClick={() => setPreset("preset-sky")}
              >
                <div className="h-3 w-3 rounded-full bg-sky-500" />
              </div>
              <div
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-300 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800"
                onClick={() => setPreset("preset-purple")}
              >
                <div className="h-3 w-3 rounded-full bg-purple-500" />
              </div>
              <div
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-300 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800"
                onClick={() => setPreset("preset-blue")}
              >
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <div
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-300 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800"
                onClick={() => setPreset("preset-orange")}
              >
                <div className="h-3 w-3 rounded-full bg-orange-500" />
              </div>
              <div
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-300 ease-linear hover:bg-slate-100 dark:border-stone-50 dark:hover:bg-zinc-800"
                onClick={() => setPreset("preset-red")}
              >
                <div className="h-3 w-3 rounded-full bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeSettings;
