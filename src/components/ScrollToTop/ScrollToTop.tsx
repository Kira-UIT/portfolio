import { TopArrowIcon } from "@/utils/medias";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";

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
      } bottom-12 right-12 animate-bounce bg-primary p-2 hover:bg-primary-hover rounded-md`}
    >
      <TopArrowIcon width={24} height={24} />
    </div>
  );
};

export default ScrollToTop;
