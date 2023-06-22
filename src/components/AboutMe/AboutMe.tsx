import React, { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div id="about-me" className="min-h-screen pt-16">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <article>
          Hi, I&rsquo;m Kira - the student of the University of Information
          Technology (UIT). My dream is to become a Full Stack Web Developer. My
          passion lies with dreaming up ideas and making them come true with
          elegant interfaces. I take great care in the experience, architecture,
          and code quality of the things I build.
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
