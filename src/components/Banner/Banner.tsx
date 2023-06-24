import { socialMedias } from "@/constants/socialMedias";
import Link from "next/link";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <div
      id="banner"
      className="banner flex min-h-screen flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between"
    >
      <div className="relative z-10 space-y-4 uppercase">
        <h2 className="text-4xl">Hi, I&apos;m</h2>
        <div className="nickname relative text-5xl font-bold md:text-9xl">
          <h2 className="animate-water-animation text-5xl font-bold md:text-9xl">
            Kira
          </h2>
          Kira
        </div>
        <h3 className="text-3xl font-bold text-green-500 md:text-5xl">
          Full Stack Developer
        </h3>
        <p className="max-w-xl text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sed
          eveniet laudantium, id impedit sapiente, recusandae culpa, odio quasi
          ipsam tempore? Natus, magni. Ratione molestiae perspiciatis repellat
          eligendi distinctio velit?
        </p>
        <div className="flex gap-8">
          {socialMedias.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              target="_blank"
              className="hover:text-green-500"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="#portfolio"
            className="mb-2 mr-2 inline-flex items-center rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-600 py-2.5 pl-5 pr-3 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
            replace
          >
            Explore my portfolio &#x27F6;
          </Link>
          <Link
            href="#contact-me"
            className="mb-2 mr-2 inline-flex items-center rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-600 py-2.5 pl-5 pr-3 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
            replace
          >
            Connect with me &#x27F6;
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
