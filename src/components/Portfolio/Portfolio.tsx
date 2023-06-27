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
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72Z"></path>
              </svg>
            </span>
            <span className="ml-2">Education</span>
          </h2>
          <div className="p-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7h10v14H2V3h10v4ZM4 19h2v-2H4v2Zm2-4H4v-2h2v2Zm-2-4h2V9H4v2Zm2-4H4V5h2v2Zm2 12h2v-2H8v2Zm2-4H8v-2h2v2Zm-2-4h2V9H8v2Zm2-4H8V5h2v2Zm10 12V9h-8v2h2v2h-2v2h2v2h-2v2h8Zm-2-8h-2v2h2v-2Zm-2 4h2v2h-2v-2Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
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
                  <path
                    fillRule="evenodd"
                    d="M9 5H5v4H3V5c0-1.1.9-2 2-2h4v2ZM3 15h2v4h4v2H5c-1.1 0-2-.9-2-2v-4ZM19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2Zm-4 16h4v-4h2v4c0 1.1-.9 2-2 2h-4v-2ZM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm-2 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>Computer Networking And Communications</span>
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
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7Z"></path>
                </svg>
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
