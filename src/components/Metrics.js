
import React from "react";
import Image from "next/image";
import Faqs from "./Faqs";




const Metrics = () => {
  

  return (
    <div className="font-playfair ">
      <div className="bg-green-100 text-wrap flex flex-col space-y-5 items-center lg:flex-row lg:space-x-20 m-5 p-5">
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
            className="w-3/5 p-5 mr-2 rounded-lg border-4 border-green-100 lg:w-5/6"
            type="email"
            placeholder="enter your mail"
          />
          <button className="bg-primary p-5 rounded-lg">Join Waitlist</button>
        </span>
      </div>

      <Faqs/>

      <div className="p-5 text-green-600 text-center flex flex-col lg:flex-row">

        <div className="mb-5 lg:mr-10 justify-center items-center flex flex-col">
          <p className="font-roboto text-2xl  text-black">Reach out</p>
          <p className="text-wrap">
            Our platform empowers farmers to sell fresh, quality produce to
            local and global buyers, ensuring fair prices and helping them
            thrive.Whether you&apos;re a small farmer or a consumer passionate
            about local agriculture, join us in growing a sustainable future for
            all!
          </p>
        </div>

        <div className="p-6  bg-white shadow-lg rounded-lg lg:w-3/4">
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

      <footer>
        <div className="bg-primary flex flex-col items-center p-10 lg:flex-row space-x-20 justify-center">
          <div className="flex flex-col">
            <Image
              src={"/Images/logo-footer.png"}
              width={250}
              height={250}
              alt="logo"
            />
            {/* <p>address: Leadcity university, Toll gate Ibadan</p> */}
          </div>
          <div className="lg:border-x-4 p-10 border-green-100">
            <p className="font-roboto text-xl">Company</p>
            <li>Team</li>
            <li>Blog</li>
            <li>Carear</li>
            <li>Support</li>
          </div>

          <div>
            <span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-green-600 rounded-lg my-4"
              />
              <button className="mb-2 bg-green-600 text-white p-3 rounded-lg">
                Subscribe
              </button>
            </span>
            <span>
              <p>Follow us</p>
              <span></span>
            </span>
            <span>
              <p>tel: +234-656- 6833-345</p>
              <p>email: agrictech@dev.gmail.com</p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Metrics;
