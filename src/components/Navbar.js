import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./assests/image.jpg";

const Navbar = () => {
  return (
    <div className="bg-black text-gray-300 flex flex-col w-1/5 h-full fixed">
      <div className="flex flex-col items-center">
        <img
          src={Image1}
          alt="-"
          className=" flex rounded-full border-8 border-black border-opacity-20 w-2/5 justify-center mt-10"
        ></img>
        <h1 className="text-3xl text-light py-5">Rachit Gala</h1>
      </div>

      <div className="flex flex-col my-4 px-6 py-8 items-center">
        <ul>
          <li className="py-3">
            <div className="flex">
              <img
                src="https://cdn.iconfinder.com/stored_data/886618/128/png?token=1677262423-mriQKNhYNrnQ7ortMe%2BLHUwTmbvelBMxA1b9FQ1kNTE%3D"
                alt="Home"
                className="h-6 w-6"
              />

              <Link to="/" className="text-xl hover:text-[#0d6efd] px-2">
                Home
              </Link>
            </div>
          </li>
          <li className="py-3">
            <div className="flex">
              <img
                src="https://cdn.iconfinder.com/stored_data/886565/128/png?token=1677262269-FpWTPxt9kDzTTLdFj6uqzbVsy9wHHCA7lvILJ51%2Fzss%3D"
                alt="Home"
                className="h-6 w-6"
              />
              <Link to="/about" className="text-xl hover:text-[#0d6efd] px-2">
                About Me
              </Link>
            </div>
          </li>
          <li className="py-3">
            <div className="flex">
              <img
                src="https://cdn.iconfinder.com/stored_data/886621/128/png?token=1677262516-jI3CK6P%2B7Cm1k9ssqGkdzRjytGkDIFlAD4mIqWBVaps%3D"
                alt="Home"
                className="h-6 w-6"
              />
              <Link to="/resume" className="text-xl hover:text-[#0d6efd] px-2">
                Resume
              </Link>
            </div>
          </li>
          <li className="py-3">
            <div className="flex">
              <img
                src="https://cdn.iconfinder.com/stored_data/886623/128/png?token=1677262591-3950AqqYqeVTHDS5bL9fqQx06NXP9u7hVvISWC56wlU%3D"
                alt="Home"
                className="h-6 w-6"
              />
              <Link
                to="/portfolio"
                className="text-xl px-2 hover:text-[#0d6efd] "
              >
                Portfolio
              </Link>
            </div>
          </li>
          <li className="py-3">
            <div className="flex">
              <img
                src="https://cdn.iconfinder.com/stored_data/886627/128/png?token=1677262735-IWrOLKM8EhN8R27iJnDevXGZISJe5y2zR1lA%2FV2iOQI%3D"
                alt="Home"
                className="h-6 w-6"
              />
              <Link to="/contact" className="text-xl px-2 hover:text-[#0d6efd]">
                Contact Me
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
