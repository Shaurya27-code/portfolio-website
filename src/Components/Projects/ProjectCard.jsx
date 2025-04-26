import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import Screenshot from "../../assets/Screenshot5.png"
import Screenshot1 from '../../assets/Screenshot.png'


const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full max-w-5xl bg-[#0c0e19] shadow-2xl shadow-slate-900 rounded-3xl">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
        <img
          className="w-full md:w-1/2 h-96 object-contain rounded-xl"
          src={Screenshot}
          alt="Screenshot 1"
        />
        <img
          className="w-full md:w-1/2 h-96 object-contain rounded-xl"
          src={Screenshot1}
          alt="Screenshot 2"
        />
      </div>

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
      <a
          href="https://github.com/Shaurya27-code/UBER"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
