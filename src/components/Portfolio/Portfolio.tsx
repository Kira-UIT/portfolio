import {
  BagIcon,
  BusinessIcon,
  DurationIcon,
  EducationIcon,
  FireIcon,
  LinkIcon,
  MajorIcon,
} from "@/utils/medias";
import Link from "next/link";
import { FC } from "react";

const Portfolio: FC = () => {
  return (
    <div id="portfolio" className="min-h-screen pt-16">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Port
        <span className="text-primary transition-colors duration-500 ease-linear">
          folio
        </span>
      </h2>
      <div className="grid grid-cols-2">
        <div className="col-span-2 space-y-2 lg:col-span-1">
          <h2 className="mb-4 flex items-center justify-center text-xl font-semibold">
            <span className="text-primary transition-colors duration-500 ease-linear">
              <EducationIcon width={24} height={24} />
            </span>
            <span className="ml-2">Education</span>
          </h2>
          <div className="p-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                <BusinessIcon width={24} height={24} />
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary transition-colors duration-500 ease-linear">
                  University of Information Technology
                </span>
                <Link
                  href="https://www.uit.edu.vn/"
                  target="_blank"
                  className="cursor-pointer hover:text-primary"
                >
                  <LinkIcon width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                <MajorIcon width={24} height={24} />
              </span>
              <span>Computer Networking And Communications</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                <DurationIcon width={24} height={24} />
              </span>
              <span>Aug, 2018 - Jun 2023</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                <FireIcon width={24} height={24} />
              </span>
              <span>GPA - 8.01/10</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-4 flex items-center justify-center text-xl font-semibold">
            <span className="text-primary transition-colors duration-500 ease-linear">
              <BagIcon />
            </span>
            <span className="ml-2">Experience</span>
          </h2>
          <div className="p-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                1
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary transition-colors duration-500 ease-linear">
                    FPT Software
                  </span>
                  <Link
                    href="https://fptsoftware.com/"
                    target="_blank"
                    className="cursor-pointer hover:text-primary"
                  >
                    <LinkIcon width={20} height={20} />
                  </Link>
                </div>
                <div>Front-end Developer ReactJS</div>
                <div>Mar, 2022 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
