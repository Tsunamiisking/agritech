import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-primary text-white p-5 font-extralight cursor-pointer">
        <div className=" flex flex-col items-center justify-center p-10 lg:flex-row space-x-20">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/Images/logo-footer.png"}
              width={150}
              height={150}
              alt="logo"
            />
            <p>Bridging technology and Tradition</p>
          </div>

          <div className="lg:border-x-2 p-10 border-green-100 list-none flex flex-col items-center justify-center">
            <p className="font-roboto text-xl">Company</p>
            <li>Team</li>
            <li>Blog</li>
            <li>Carear</li>
            <li>Support</li>
            <li>Documentation</li>
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

            <span className="items-center flex flex-col">
              <p>tel: +234-656- 6833-345</p>
              <p>email: agrictech@dev.gmail.com</p>
            </span>
          </div>
        </div>
        <div>
          <span className="flex flex-col font-thin text-green-100 items-center justify-center p-5">
            <p>Follow us</p>
            <span className="flex space-x-4 p-5">
              <span className="text-secondary text-4xl hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </span>
              <span className="text-secondary text-4xl hover:text-white transition-colors duration-300">
                <FaInstagramSquare />
              </span>
              <span className="text-secondary text-4xl hover:text-white transition-colors duration-300">
                <FaSquareXTwitter />
              </span>
            </span>
          </span>

          <div className="flex flex-col font-thin mt-5 text-green-100 items-center justify-center lg:flex-row space-x-4">
            <p>&copy; 2024 Software Development Team</p>
            <p>All rights reserved.</p>

            <p>
              <a href="/terms-of-service">Terms of Service</a> |
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
