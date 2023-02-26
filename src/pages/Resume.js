import React from "react";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";

export const Resume = () => {
  return (
    <div className="flex flex-col w-7/12 mx-auto">
      <h1 className="text-3xl my-7 font-bold text-blue-700 mx-2">Resume</h1>
      <p className="font-normal text-lg mx-5">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.Magnam dolores commodi
        suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
      </p>

      <div className="flex mt-14 mb-5  ">
        <div className="flex flex-col px-3 ">
          <div className="text-3xl text-blue-700 mx-5 font-semibold my-3 py-1">
            Education
          </div>
          <Education
            year="2019"
            college="SVDD ENGLISH MEDIUM SCHOOL"
            qualification="SSC"
            marks="92.20%"
          />
          <Education
            year="2021"
            college="RAO JUNIOR COLLEGE OF SCIENCE"
            qualification="
          HSC"
            marks="94.20%"
          />
          <Education
            year="2021-25"
            college="DJ SANGHVI COLLEGE OF ENGINEERING"
            qualification="BTECH"
            marks="8.5"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-3xl text-blue-700 mx-5 font-semibold my-3 py-1 ">
            Experience
          </div>
          <Experience
            year="lorem"
            company="lorem munich"
            description="Lead in the design, development, and implementation of the graphic, layout, and production"
          />
          <Experience
            year="lorem"
            company="lorem munich"
            description="Lead in the design, development, and implementation of the graphic, layout, and production "
          />
          <Experience
            year="lorem"
            company="lorem munich"
            description="Lead in the design, development, and implementation of the graphic, layout, and production "
          />
        </div>
      </div>

      <div className="flex flex-col mb-10 ">
        <h1 className="text-3xl py-3 font-bold text-blue-700 mx-2">Skills</h1>
        <p className="text-xl py-3">HTML</p>
        <div class="w-4/5 bg-[#ddd] h-6">
          <div class="text-right bg-blue-700 h-6  text-[#000] w-10/12"></div>
        </div>
        <p className="text-xl py-3">CSS</p>
        <div class="w-4/5 h-6  bg-[#ddd]">
          <div class="text-right bg-blue-700 h-6 text-[#000] w-8/12"></div>
        </div>
        <p className="text-xl py-3">JavaScript</p>
        <div class="w-4/5 h-6 bg-[#ddd]">
          <div class="text-right bg-blue-700 h-6 text-[#000] w-8/12"></div>
        </div>
        <p className="text-xl py-3">C/C++</p>
        <div class="w-4/5 bg-[#ddd] h-6">
          <div class="text-right bg-blue-700 h-6  text-[#000] w-9/12"></div>
        </div>
        <p className="text-xl py-3">JAVA</p>
        <div class="w-4/5 bg-[#ddd] h-6">
          <div class="text-right bg-blue-700 h-6  text-[#000] w-6/12"></div>
        </div>
      </div>
    </div>
  );
};
