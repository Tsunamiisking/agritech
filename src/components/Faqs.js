"use client";
import React from "react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I sign Up??",
    answer:
      "Click Sign Up on our homepage and enter the required information. You’ll receive an email confirmation to activate your account.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Browse the products, add items to your cart, and proceed to checkout. You’ll be prompted to create an account if you don’t already have one.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, online bank transfers, and digital wallets. All transactions are secure and encrypted.",
  },
  {
    question: "How do I manage my inventory?",
    answer:
      "Through your seller dashboard, you can update stock levels, add or remove products, and track performance.",
  },
  {
    question: "How will I get paid?",
    answer:
      "Payouts are made to your registered bank account on a weekly/monthly basis, depending on your sales volume and agreement terms..",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="p-5   border-b-2 border-green-600 justify-center flex flex-col items-center">
        <p className="text-2xl font-semibold mb-2 text-center">FAQ</p>

        <div className="space-y-6 lg:flex flex-row justify-center items-center ">
          <div className=" space-y-4 w-6/12">
            <textarea
              className="w-full p-10 border border-x-green-600 rounded-lg "
              placeholder="Type in your question"
            ></textarea>

            <button className="w-2/4 bg-green-600 text-white py-2 rounded-lg m-auto">
              Submit
            </button>
          </div>

          <div className="bg-white  lg:ml-20">
            {faqs.map((faq, index) => (
              <div key={index} className="">
                <div
                  className="flex space-x-10 items-center justify-between mb-2 text-green-600"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="w-32 ml-20 cursor-pointer">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && <div className="">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
