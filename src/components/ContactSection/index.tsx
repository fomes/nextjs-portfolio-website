"use client";

import React from "react";
import GithubIcon from "../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 sm:z-0">
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/fomes" target="_blank">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fgomesdeluna/"
            target="_blank"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="hover:scale-110 transition-all duration-300 mr-1"
            />
          </Link>
          <Link href="mailto:fgomesdeluna@gmail.com" target="_blank">
            <SiGmail
              size={48}
              className="text-white hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
