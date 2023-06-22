import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IProjectProps {
  title: string;
  description: string;
  thumbnail?: string;
}

const Card: FC<IProjectProps> = (props: IProjectProps) => {
  const { title, description, thumbnail = "/thumbnail.jpg" } = props;
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href="/">
        <Image src={thumbnail} alt="" width={600} height={500} />
      </Link>
      <div className="p-5">
        <Link href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-green-400 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href="#"
          className="inline-flex items-center rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
