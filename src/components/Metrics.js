import React from "react";
import Image from "next/image";

const Metrics = () => {
  return (
    <div className="font-playfair ">
      <div className="bg-green-100 text-wrap flex flex-col space-y-5 items-center lg:flex-row lg:space-x-20 p-5">
        <span>
          <Image src={"/agric.jpg"} width={300} height={500} alt="agric" />
        </span>
        <span>
          <p>
            We aim at enhancing market access for small and local farmers in
            Nigeria. The system provides a digital market place, market
            intelligence and financial service tailored to the need of small
            farmer holders
          </p>
        </span>
        <span>
          <p>
            We offer a user friendly for famers to sell thier produce directly
            to buyers with real time market data proving a fiar price, demand
            and market forcast
          </p>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row px-5 items-center justify-items-center ">
        <div className="font-extrabold font-roboto text-2xl text-balance text-center text-green-600 my-3">
          <h3>An Accesible Market Place For Fresh Farm Produce</h3>
        </div>

        <div className="flex  m-auto   text-center space-x-10  rounded-xl bg-green-100  p-5 my-3 ">
          <span>
            <h1 className="font-extrabold text-2xl">15+</h1>
            <h5>Active State</h5>
          </span>
          <span>
            <h1 className="font-extrabold text-2xl">100%</h1>
            <h5> Guarantee</h5>
          </span>
          <span>
            <h1 className="font-extrabold text-2xl">100%</h1>
            <h5> Fee Based</h5>
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-5 font-roboto text-center text-2xl">
          Join waitlist and get notified when we launch
        </p>
        <span>
          <input
            className="w-3/5 p-5 mr-2"
            type="email"
            placeholder="enter your mail"
          />
          <button className="bg-primary p-5 rounded-lg">Join Waitlist</button>
        </span>
      </div>

      <div className="p-5 max-w-xl mx-auto ">
        <p className="text-2xl font-semibold mb-2 text-center">FAQ</p>

        <div className="space-y-6 " >
          <div className="bg-white p-4 ">
            {/* You can populate FAQ items here */}
          </div>

          <div className="space-y-4">
            <textarea
              className="w-full p-10 border border-x-primary rounded-lg "
              placeholder="Type in your question"
            ></textarea>

            <button className="w-2/4 bg-primary text-white py-2 rounded-lg m-auto">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 text-primary text-center">
        <div className="mb-5">
          <p className="font-roboto text-2xl text-black">Reach out</p>
          <p>
            Our platform empowers farmers to sell fresh, quality produce to
            local and global buyers, ensuring fair prices and helping them
            thrive.Whether you're a small farmer or a consumer passionate about
            local agriculture, join us in growing a sustainable future for all!
          </p>
        </div>
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
          <form className="space-y-4 w-full">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-primary rounded-lg "
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-primary rounded-lg "
            />
            <textarea
              className="h-40 w-full p-3 border border-primary rounded-lg  resize-none"
              placeholder="Enter your message"
            ></textarea>
          </form>
          <button className="mt-4 w-full bg-primary text-white p-3 rounded-lg">
            Send Mail
          </button>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Metrics;
