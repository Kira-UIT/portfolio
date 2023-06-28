import { TopArrowIcon } from "@/utils/medias";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface IScrollToTopProps {
  top?: number;
}

const ScrollToTop: FC<IScrollToTopProps> = (props) => {
  const { top = 20 } = props;
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    router.replace("/");
    console.log(router.asPath);
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
    <div
      className={`${
        visible ? "fixed" : "hidden"
      } bottom-4 right-4 animate-bounce cursor-pointer rounded-md bg-primary p-2 text-white hover:bg-primary-hover sm:bottom-12 sm:right-12`}
      onClick={scrollToTopHandler}
    >
      <TopArrowIcon width={24} height={24} />
    </div>
  );
};

export default ScrollToTop;
