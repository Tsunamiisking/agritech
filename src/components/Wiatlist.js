import React from "react";

function Wiatlist() {
  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center">
        <p className="mb-5 font-roboto text-center text-2xl">
          Join waitlist and get notified when we launch
        </p>
        <span className="flex w-full">
          <input
            className=" w-10/12 p-5 mr-5 rounded-lg border-4 border-green-100 lg:w-full"
            type="email"
            placeholder="enter your mail"
          />
          <button className="bg-green-600 p-5 rounded-lg">Join Waitlist</button>
        </span>
      </div>
    </>
  );
}

export default Wiatlist;
