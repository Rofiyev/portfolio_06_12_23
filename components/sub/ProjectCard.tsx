import Image from "next/image";
import { FC } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

const ProjectCard: FC<{
  src: string;
  title: string;
  description: string;
}> = ({ src, title, description }) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-96 z-[21]">
      <div className="flex flex-col">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative flex flex-col p-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300 line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex gap-3 items-center">
          <Link target="_blank" href={"https://github.com/Rofiyev"}>
            <IoLogoGithub className="text-white text-3xl cursor-pointer hover:text-[#a88dff] transition-all ease-in-out" />
          </Link>
          <Link target="_blank" href={"#"}>
            <FaLink className="text-white text-[1.6rem] cursor-pointer  hover:text-[#a88dff] transition-all ease-in-out" />
          </Link>
        </div>

        <Link
          className="flex items-center gap-2 cursor-pointer"
          target="_blank"
          href={"https://rof1yev-blog.vercel.app/"}
        >
          <Image
            src="/author.jpg"
            alt="Author"
            width={40}
            height={40}
            className="object-cover rounded-full !h-[40px]"
            loading="lazy"
          />
          <span className="text-white">Rofiyev D.</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
