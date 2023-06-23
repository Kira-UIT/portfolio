import { FC } from "react";
import { Card } from "@/components";

const Project: FC = () => {
  return (
    <div id="projects" className="min-h-screen pt-16">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Latest <span className="text-green-400">Projects</span>
      </h2>
      <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        My projects I have worked on.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
