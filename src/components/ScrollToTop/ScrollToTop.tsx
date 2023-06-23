import { FC, useEffect, useState } from "react";

interface IScrollToTopProps {
  top?: number;
}

const ScrollToTop: FC<IScrollToTopProps> = (props) => {
  const { top = 20 } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [top]);

  return (
    <div className={`${visible ? "fixed" : "hidden"} bottom-12 right-12`}>
      <div className="flex items-center justify-center">
        <button
          onClick={scrollToTopHandler}
          className="rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-2 text-center text-sm font-medium text-white hover:bg-gradient-to-br"
        >
          <svg
            width="24"
            height="24"
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
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
