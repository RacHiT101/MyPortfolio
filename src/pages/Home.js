import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export const Home = () => {
  const [text] = useTypewriter({
    words: ["a Developer", "a Designer", "a Student", "Happy"],
    loop: 100,
    typeSpeed: 200,
    delaySpeed: 1000,
  });

  // const { isType, isDelete, isDelay, isDone } = helper
  return (
    <>
      <img
        src="https://media3.giphy.com/media/U3qYN8S0j3bpK/giphy.webp?cid=ecf05e4731wn95ee26gley55ubinpz37ipexr196ukwie5nx&rid=giphy.webp&ct=g"
        alt="Oops"
        className="w-screen h-screen flex ml-[20%] opacity-95"
      ></img>

      <div className="absolute flex flex-col h-screen justify-center ml-[46%]">
        <h1 className="text-7xl py-1 text-gray-200 bg-clip-text font-poppins font-semibold">
          Rachit Gala
        </h1>

        <p className="text-4xl flex justify-center text-gray-300 bg-clip-text font-poppins ">
          I'm {text}
        </p>
      </div>
    </>
  );
};
