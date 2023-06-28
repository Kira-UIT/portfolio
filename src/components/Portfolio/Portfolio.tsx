import {
  BusinessIcon,
  DurationIcon,
  EducationIcon,
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
                  <LinkIcon width={24} height={24} />
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
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.482 12.602c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55-3.63 2.14-6.24 6.43-4.05 12.05.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34-.68 1.04-1.37 2.72-1.37 5.25.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69Zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32Z"></path>
                </svg>
              </span>
              <span>GPA - 8.01/10</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-4 flex items-center justify-center text-xl font-semibold">
            <span className="text-primary transition-colors duration-500 ease-linear">
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2ZM10 5h4v2h-4V5ZM4 9h16v5h-5v-3H9v3H4V9Zm9 6h-2v-2h2v2Zm6 4H5v-3h4v1h6v-1h4v3Z"></path>
              </svg>
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
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"></path>
                      <path d="M10 14 20 4"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
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
