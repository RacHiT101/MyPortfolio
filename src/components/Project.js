import React from "react";

export const Project = ({ image, name, description, url }) => {
  return (
    <div className="flex my-3">
      <div className="w-[500px] h-auto">
        <img src={image} alt="oops" className="w-[500px] h-auto"></img>
      </div>
      <div className="flex flex-col px-2">
        <h1 className="text-blue-700 font-medium text-2xl pl-3 pb-4">
          Name : {name}
        </h1>
        <p className="text-lg font-normal pl-3 pb-5 ">
          Description : {description}
        </p>
        <div>
          <button className="ml-5 bg-blue-700 text-white rounded-2xl py-1 px-12">
            <a href={url}>Visit</a>
          </button>
        </div>
      </div>
    </div>
  );
};
