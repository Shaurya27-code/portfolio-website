import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact,FaAngular } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import rubiscape from '../../assets/rubiscape.png'
import inteliment from '../../assets/Inteliment.png'


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAngular color="#F24E1E" size={50}></FaAngular>
            {/* <FaFigma color="#F24E1E" size={50} /> */}
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            
            <SiTailwindcss color="#FF4438" size={50}></SiTailwindcss>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            
            <SiNodedotjs color="#FF4438" size={50}></SiNodedotjs>
          </span>
        </div>
        <div>
  <div className="flex flex-col md:flex-row gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
    <img className="h-24 w-full md:w-auto" src={rubiscape} alt="" />
    <span className="text-white">
      <h2 className="leading-tight break-words">{/* Ensures text wraps properly */} 
        Associate Software Engineer, Rubiscape
      </h2>
      <p className="text-sm leading-tight font-thin">
        Aug 2023 - Nov 2024
      </p>
    </span>
  </div>

  <div className="flex flex-col md:flex-row gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
    <img className="h-14 w-full md:w-auto" src={inteliment} alt="" />
    <span className="text-white">
      <h2 className="leading-tight break-words">{/* Ensures text wraps properly */}
        Project Trainee, Inteliment Technologies
      </h2>
      <p className="text-sm leading-tight font-thin">
        April 2023 - July 2023
      </p>
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default Experience;
