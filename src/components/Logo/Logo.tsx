import React, { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="logo relative text-4xl after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:text-4xl after:text-primary after:transition-colors after:duration-500 after:ease-linear after:content-['Kira']">
      Kira
    </div>
  );
};

export default Logo;
