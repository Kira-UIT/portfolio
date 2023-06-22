import { FC } from "react";
import Card from "../Card/Card";

const Project: FC = (props) => {
  return (
    <div id="projects" className="min-h-screen pt-16">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Latest Projects
      </h2>
      <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        My projects I&rsquo;ve worked on.
      </p>
      <div className="grid grid-cols-4 gap-8">
        <Card
          title="E-commerce"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil commodi odio quaerat labore cum unde accusamus adipisci exercitationem optio vitae quidem, sint expedita alias deserunt ab consectetur? Animi, dolorem?"
        />
        <Card
          title="E-commerce"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil commodi odio quaerat labore cum unde accusamus adipisci exercitationem optio vitae quidem, sint expedita alias deserunt ab consectetur? Animi, dolorem?"
        />
        <Card
          title="E-commerce"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil commodi odio quaerat labore cum unde accusamus adipisci exercitationem optio vitae quidem, sint expedita alias deserunt ab consectetur? Animi, dolorem?"
        />
        <Card
          title="E-commerce"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil commodi odio quaerat labore cum unde accusamus adipisci exercitationem optio vitae quidem, sint expedita alias deserunt ab consectetur? Animi, dolorem?"
        />
      </div>
    </div>
  );
};

export default Project;
