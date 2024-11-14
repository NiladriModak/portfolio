import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
function Navbar() {
  return (
    <nav className=" mb-15 flex items-center justify-between py-4 underline-neutral-300">
      <div className="flex shrink-0 items-center px-3">
        <h1 className=" text-3xl items-center justify-center w-10 hover:cursor-pointer">
          Nm
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/niladri-modak-16a99824b/"
          rel="noopener noreferrer"
          target="__blank"
        >
          <FaLinkedin
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="LinkedIn"
            className="hover:cursor-pointer"
          />
        </a>

        <Tooltip className="w-1/2" id="linkedin-tooltip" />
        <a
          href="https://github.com/NiladriModak"
          rel="noopener noreferrer"
          target="__blank"
        >
          <FaGithub
            data-tooltip-id="github-tooltip"
            data-tooltip-content="GitHub"
            className="hover:cursor-pointer"
          />
        </a>

        <Tooltip className="w-1/2" id="github-tooltip" />
        <a
          href="https://leetcode.com/u/niladrimodak2001/"
          rel="noopener noreferrer"
          target="__blank"
        >
          <SiLeetcode
            data-tooltip-id="leetcode-tooltip"
            data-tooltip-content="Leetcode"
            className="hover:cursor-pointer"
          />
        </a>

        <Tooltip className="w-1/2" id="leetcode-tooltip" />
        <a
          href="https://drive.google.com/file/d/1pdas3pSjQfB_1MmfR1URQ8HzvhZBDDAK/view?usp=sharing"
          rel="noopener noreferrer"
          target="__blank"
          className="border border-neutral-50 p-2 rounded-md hover:bg-white hover:text-neutral-950"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
