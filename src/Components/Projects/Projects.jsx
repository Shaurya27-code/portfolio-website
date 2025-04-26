import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
   

    <div id="Projects" className="p-10 md:p-24 text-white ">
  <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

  <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
    <ProjectCard
      title="Uber Clone"
      main="A full-stack ride-booking application built with the MERN stack, featuring real-time ride tracking using Google Maps API and Socket.io. Designed for a seamless mobile-first experience for both users and drivers, it covers functionalities like ride requests, driver matching, and live location updates.
      Note: Since the project requires an API key for Google Maps, the demo is not publicly available. You can explore the source code below."
    />
  </div>
</div>

  );
};

export default Projects;
