import React from "react";
import Link from "next/link";
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
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
        className="h-52 md:h-72 rounded-t-xl relative group hover:opacity-60 transition-all duration-300"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 relative rounded-full bg-white/70 hover:bg-white transition-all duration-300 group/link"
          >
            <CodeBracketIcon
              strokeWidth={2}
              className="h-8 w-8 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 relative rounded-full bg-white/70 hover:bg-white group/link"
          >
            <MagnifyingGlassIcon
              strokeWidth={2}
              className="h-8 w-8 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer"
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
