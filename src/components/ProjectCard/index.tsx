import React from "react";
import Link from "next/link";
import {
  CodeBracketIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative flex justify-center items-center group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="items-center justify-center rounded-ful hidden group-hover:flex">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 rounded-full bg-white flex justify-center items-center hover:scale-110 transition-all duration-300"
          >
            <CodeBracketIcon
              strokeWidth={2}
              className="h-8 w-8 text-blue-500 cursor-pointer"
            />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 rounded-full bg-white flex justify-center items-center hover:scale-110 transition-all duration-300"
          >
            <EyeIcon
              strokeWidth={2}
              className="h-8 w-8 text-blue-500 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}
