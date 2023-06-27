import React, { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="logo relative text-4xl">
      KIRA
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary transition-colors duration-500 ease-linear">
        KIRA
      </h1>
    </div>
  );
};

export default Logo;
