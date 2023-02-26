import React from "react";

export const Contactme = () => {
  return (
    // <div className="bg-gradient-to-r from-gray-100 to-gray-300">

    <div className="flex flex-col mx-[21%] font-poppins">
      <div className=" flex flex-col">
        <h1 className="text-3xl my-7 font-bold text-blue-700">Contact</h1>
        <p className="font-normal text-lg">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate.
        </p>
      </div>
      <div className="flex mt-10 gap-8 font-poppins">
        <div className="flex flex-col h-full py-10 bg-[#e9ecef] p-3 w-1/2 justify-evenly rounded-2xl">
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="https://cdn1.iconfinder.com/data/icons/search-engine-optimisation-seo/44/seo_icons-26-64.png"
                className="w-10 h-10"
              />

              <h1 className="text-3xl font-semibold px-2">Location</h1>
            </div>
            <p className="mx-12"> B/101 Rachana CHS Ghatkopar(E) </p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-64.png"
                className="w-10 h-10"
              />
              <h1 className="text-3xl font-semibold px-2">Email</h1>
            </div>
            <p className="mx-12"> rachitgala05@gmail.com </p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="https://cdn3.iconfinder.com/data/icons/object-emoji/50/Call-64.png"
                className="w-10 h-10"
              />
              <h1 className="text-3xl font-semibold px-2">Call</h1>
            </div>
            <p className="mx-12"> 9372950825 </p>
          </div>
          <div className="flex">
            <a href="https://github.com/RacHiT101" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                alt="GitHub"
                className="h-10 px-1"
              />
            </a>
            <a href="https://www.instagram.com/accounts/emailsignup/">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.zYFY027dJy-cyIlH_cWapwHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
                alt="Instagram"
                className="h-10 px-1"
                />
            </a>

            <img
              src="https://tse1.mm.bing.net/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&pid=Api&rs=1&c=1&qlt=95&w=118&h=118"
              alt="facebook"
              className="h-10 px-1"
            />

            <a href="https://www.linkedin.com/in/rachitgala05/">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.DQuD2GpqUjOC4oyK-pSrtAHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
                alt="Linkedin"
                className=" h-10 px-1"
              />
            </a>
            <a href="https://twitter.com/?lang=en-in">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP._Ujco6PWCgH_UJfPXtPafAHaFj&pid=Api&rs=1&c=1&qlt=95&w=152&h=114"
                alt="twitter"
                className=" h-10 px-1"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-[#e9ecef] w-1/2 rounded-2xl p-5">
          <div className="pb-5 text-xl  text-blue-700 font-semibold">
            {" "}
            Your Name
            <input
              type="text"
              // placeholder="Your Name"
              className="h-14 border-2 px-2 w-[400px] border-blue-200/100 shadow-lg shadow-gray-500 rounded-xl"
              required
            ></input>
          </div>
          <div className="pb-5 text-xl  text-blue-700 font-semibold">
            {" "}
            Your Email
            <input
              type="text"
              // placeholder="Your Email"
              className="h-14 border-2 px-2 w-[400px] border-blue-200/100 shadow-lg shadow-gray-500 rounded-xl"
              required
            ></input>
          </div>
          <div className="pb-5 text-xl  text-blue-700 font-semibold ">
            Subject
            <input
              type="text"
              // placeholder="Subject"
              className="h-14  border-2 px-2 w-[400px] border-blue-200/100 shadow-lg shadow-gray-500 rounded-xl"
              required
            ></input>
          </div>
          <div className="pb-5 text-xl  text-blue-700 font-semibold ">
            Message
            <input
              type="text"
              // placeholder="Message"
              className="h-28 text border-2  px-2 w-[400px] border-blue-200/100 shadow-lg shadow-gray-500 rounded-xl"
              required
            ></input>
          </div>
        </div>
      </div>
    </div>
              // </div>
  );
};
