import React from "react";

function Reachout() {
  return (
    <>
      <div className="p-5 text-green-600 text-center justify-center items-center flex flex-col lg:flex-row">
        <div className="mb-5 lg:mr-10  flex flex-col">
          <p className="font-roboto text-2xl  text-black">Reach out</p>
          <p className="text-wrap">
            Our platform empowers farmers to sell fresh, quality produce to
            local and global buyers, ensuring fair prices and helping them
            thrive.Whether you&apos;re a small farmer or a consumer passionate
            about local agriculture, join us in growing a sustainable future for
            all!
          </p>
        </div>

        <div className="p-6  bg-primary shadow-lg rounded-lg w-4/5">
          <form className="space-y-4 w-full">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-green-600 rounded-lg "
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-green-600 rounded-lg "
            />
            <textarea
              className="h-40 w-full p-3 border border-green-600 rounded-lg  resize-none"
              placeholder="Enter your message"
            ></textarea>
          </form>
          <button className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg">
            Send Mail
          </button>
        </div>
      </div>
    </>
  );
}

export default Reachout;
