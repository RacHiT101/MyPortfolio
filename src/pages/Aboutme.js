import React from "react";
import Image from "./image.jpg";

export const Aboutme = () => {
  return (
    <>
      <div className="">
        <div className="w-7/12 flex flex-col mx-auto">
          <h1 className="text-3xl my-7 font-bold text-blue-700">About</h1>
          <p className="font-normal text-lg">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.Magnam dolores
            commodi suscipit.
          </p>
        </div>

        <div className="flex ml-[20%] mt-14 px-5 mx-7 ">
          <img src={Image} alt="-" className="w-2/5 px-3"></img>
          <div className="flex flex-col">
            <h1 className="text-[#173b6c] text-2xl font-bold text-center pb-2">
              FrontEnd Developer And Designer
            </h1>

            <p className="px-3 pb-2">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit.{" "}
            </p>
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>Birthday:</pre>{" "}
                  </strong>
                  <p className="text-lg"> 05 August 2003</p>
                </div>

                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>website:</pre>{" "}
                  </strong>
                  <p className="text-lg"> www.example.com</p>
                </div>

                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>Phone:</pre>
                  </strong>
                  <p className="text-lg"> 9372950825</p>
                </div>

                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>City:</pre>
                  </strong>
                  <p className="text-lg">Mumbai, India</p>
                </div>
              </div>

              <div className="flex flex-col mx-20">
                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>Age:</pre>{" "}
                  </strong>
                  <p className="text-lg"> 19</p>
                </div>

                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>Degree:</pre>{" "}
                  </strong>
                  <p className="text-lg"> BTECH</p>
                </div>

                <div className="flex my-3">
                  <img
                    src="https://img.freepik.com/free-icon/chevron_318-256773.jpg?size=338&ext=jpg&ga=GA1.2.1049380960.1671785676&semt=ais"
                    alt="-"
                    className="h-8 w-8 "
                  />
                  <strong className="text-lg text-blue-700">
                    <pre>Email:</pre>{" "}
                  </strong>
                  <p className="text-lg"> rachitgala05@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
