import React from "react";

function Wiatlist() {
  return (
    <>
      <div className="p-5">
        <p className="mb-5 font-roboto text-center text-2xl">
          Join waitlist and get notified when we launch
        </p>
        <span>
          <input
            className="w-3/5 p-5 mr-2 rounded-lg border-4 border-green-100 lg:w-5/6"
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
