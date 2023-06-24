import Image from "next/image";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div id="about-me" className="flex min-h-screen items-center pt-16">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* <div className="hexagon flex items-center">
          <div className="hexagon-background">
            <Image src="/avatar.png" alt="" width={500} height={500} />
          </div>
        </div> */}
        <div>
          <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About <span className="text-green-500">Me</span>
          </h2>
          <article className="text-justify text-xl">
            Hi, I&rsquo;m Kira - the student of the University of Information
            Technology (UIT). My dream is to become a Full Stack Web Developer.
            My passion lies with dreaming up ideas and making them come true
            with elegant interfaces. I take great care in the experience,
            architecture, and code quality of the things I build.
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
