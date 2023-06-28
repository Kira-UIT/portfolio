import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PrimaryButton } from "@/components";
import { RightArrowIcon } from "@/utils/medias";

interface IProjectProps {
  title: string;
  description: string;
  thumbnail?: string;
  link?: string;
}

const Card: FC<IProjectProps> = (props: IProjectProps) => {
  const {
    title,
    description,
    thumbnail = "/thumbnail.jpg",
    link = "/",
  } = props;
  return (
    <div className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href="/" className="block w-full overflow-hidden rounded-tr-md">
        <Image
          src={thumbnail}
          alt=""
          width={600}
          height={500}
          className="rounded-tl-md transition duration-500 group-hover:scale-110"
        />
      </Link>
      <div className="p-5">
        <Link href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-primary dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link href={link}>
          <PrimaryButton icon={<RightArrowIcon width={16} height={16} />}>
            Read more
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Card;
