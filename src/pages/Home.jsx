import React, { useEffect, useState } from "react";
import i1 from "../assets/home-illustration.svg";
import Search from "../components/Home/Search.jsx";
import ProjectCards from "../components/Home/ProjectCards";
import MentorHome from "../components/Home/MentorHome";
import FilterHome from "../components/Home/FilterHome";
import IdeaHome from "../components/Home/IdeaHome";
import IdeaDisplay from "../components/Home/IdeaDisplay.jsx";


const Home = () => {
   
  return (
    <>
      
        <div className="px-40">
          <div className="w-full pt-12 h-fit mt-16 flex justify-between">
            <div className="flex justify-start px-8 items-center w-[50%]">
              <div className="flex flex-col">
                <p className="text-4xl font-serif leading-relaxed font-bold text-slate-600">
                  Empower Your Ideas, <br /> Elevate Your Projects, <br />{" "}
                  Seamless Uploading, <br /> Limitless Possibilities!
                </p>
                <p className="text-xl tracking-wide select-none mt-4">
                  Showcase your
                  <span className="text-green-500"> projects</span> to all the
                  enthusiasts out there.
                </p>
                <div className="mt-16 flex flex-col w-full">
                  {/* Removed commented-out buttons */}
                </div>
              </div>
            </div>
            <div className="w-[50%] flex justify-center items-center">
              <img src={i1} alt="Illustration" />
            </div>
          </div>
          <div>
            <Search />
            <ProjectCards />
            <IdeaDisplay />
            <MentorHome />
            <FilterHome />
            <IdeaHome />
          </div>
        </div>
      
    </>
  );
};

export default Home;
