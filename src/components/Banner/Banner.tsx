import { socialMedias } from "@/constants/socialMedias";
import Link from "next/link";
import { FC } from "react";
import PrimaryButton from "../Button/PrimaryButton";

const Banner: FC = () => {
  return (
    <div
      id="banner"
      className="banner flex min-h-screen flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between"
    >
      <div className="relative z-10 space-y-4">
        <h2 className="text-4xl">Hi, I&apos;m</h2>
        <div className="relative text-5xl font-bold uppercase md:text-9xl">
          Kira
          <h2 className="absolute left-0 top-0 animate-water-animation text-5xl font-bold text-primary transition-colors duration-500 ease-linear md:text-9xl">
            Kira
          </h2>
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
            <PrimaryButton>Explore my portfolio &#x27F6;</PrimaryButton>
          </Link>
          <Link href="#contact-me" replace>
            <PrimaryButton>Connect with me &#x27F6;</PrimaryButton>
          </Link>
        </div>
      </div>
      <div className="fancy-border h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]" />
    </div>
  );
};

export default Banner;
