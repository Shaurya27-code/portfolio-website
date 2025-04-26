import React from "react";
import avatarImg from "../../assets/avataaars.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Built responsive, user-friendly web interfaces using Angular,React.js and modern UI/UX principles, ensuring clean and scalable code.
        </p>
       
      </div>
      <div>
        <img className="h-48" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
