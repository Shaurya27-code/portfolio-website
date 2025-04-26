import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import avatarImg from "../../assets/avataaars.png";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-64" src={avatarImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm a passionate Frontend Developer with a strong focus on creating clean, responsive, and user-friendly web applications. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React and Angular, I love bringing designs to life through code. I enjoy solving problems, optimizing performance, and making sure every interaction feels smooth and intuitive. I'm always eager to learn new technologies and push the boundaries of what the web can do.
                </p>
              </span>
            </div>
            {/* <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" /> */}

              {/* <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span> */}
            {/* </div> */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a Frontend Developer, I love creating beautiful and intuitive web interfaces. Alongside my expertise in frontend technologies, I have a working knowledge of backend development with Node.js and MongoDB. This allows me to collaborate effectively across the entire web development process, from building stunning user interfaces to handling server-side logic and databases.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
