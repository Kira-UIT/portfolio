import { socialMedias } from "@/constants/socialMedias";
import Link from "next/link";
import { FC } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { RightArrowIcon } from "@/utils/medias";

const Banner: FC = () => {
  return (
    <div
      id="banner"
      className="relative flex min-h-screen flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between"
    >
      <div className="area">
        <ul className="circles">
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
          <li className="bg-primary"></li>
        </ul>
      </div>
      <div className="relative z-10 space-y-4">
        <h2 className="text-4xl">Hi, I&apos;m</h2>
        <div className="relative text-5xl font-bold uppercase after:absolute after:left-0 after:top-0 after:animate-water-animation after:text-5xl after:font-bold after:text-primary after:transition-colors after:duration-500 after:ease-linear after:content-['KIRA'] md:text-9xl after:md:text-9xl">
          Kira
        </div>
        <h3 className="text-3xl font-bold text-primary transition-colors duration-500 ease-linear md:text-5xl">
          Full Stack Developer
        </h3>
        <p className="max-w-xl">
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
        </p>
        <div className="flex gap-8">
          {socialMedias.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              target="_blank"
              className="hover:text-primary"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="#portfolio" replace>
            <PrimaryButton icon={<RightArrowIcon width={20} height={20} />}>
              Explore my portfolio
            </PrimaryButton>
          </Link>
          <Link href="#contact-me" replace>
            <PrimaryButton icon={<RightArrowIcon width={20} height={20} />}>
              Connect with me
            </PrimaryButton>
          </Link>
        </div>
      </div>
      <div>
        <div className="fancy-border h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]" />
      </div>
    </div>
  );
};

export default Banner;
