import React from "react";
import { Project } from "../components/Project";


export const Portfolio = () => {
  return (
    <div className="w-7/12 mx-auto">
      <div className="flex flex-col mx-auto">
        <h1 className="text-3xl my-7 font-bold text-blue-700">My Portfolio</h1>
        <p className="font-normal text-lg">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.Magnam dolores
          commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
          quidem.
        </p>
      </div>
      <h1 className="text-3xl font-bold text-blue-700 my-10">Projects</h1>
      <div className="">
        <Project
                url="https://github.com/RacHiT101/WeatherApp"

          image="https://tse4.mm.bing.net/th?id=OIP.RumqKis5meV366Q9QfAsKwHaFy&pid=Api&P=0"
          name="Weather App"
          description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit."
        
        />
        <Project
        url="https://github.com/RacHiT101/Multiple-Choice-Quiz-"
          image="https://tse4.mm.bing.net/th?id=OIP.nu3oSm6bAp3dMfW_JERm3AHaEc&pid=Api&P=0"
          name="Multiple Choice Quiz App"
          description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit."
        />
        <Project
        url="https://github.com/RacHiT101/Adventure-Tasks"
          image="https://tse2.mm.bing.net/th?id=OIP._ZQbFAJ-e3uHjO7pDBq7FQHaEi&pid=Api&P=0"
          name="Adventure Tasks App"
          description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit."
        />
        <Project
        url="https://github.com/RacHiT101"
          image="https://tse2.mm.bing.net/th?id=OIP.9eGlG74q8t3szpeasr1LcwHaEU&pid=Api&P=0"
          name="Lorem Magnam"
          description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit."
        />
      </div>
    </div>
  );
};
