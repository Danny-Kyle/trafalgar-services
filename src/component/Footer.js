import React from "react";
import logo from "../images/Group 2.svg";
import dots from "../images/element.svg";

const Footer = () => {
  return (
    <footer className="bg-hero-pattern">
      <div className="relative lg:container lg:mx-auto px-12 justify-evenly py-12 text-slate-100">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex">
            <div className="absolute bottom-0 -left-10">
              <img src={dots} alt="" />
            </div>
            <div className="lg:w-2/5 lg:mr-2 mb-8 text-xl">
              <div>
                <img src={logo} alt="" className="" />
              </div>
              <div className="py-6">
                <p>Trafalgar provides progressive, and affordable </p>
                <p>healthcare, accessible on mobile and online </p>
                <p> for everyone</p>
              </div>
              <div>
                <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div className="">
                  <h3 className="py-3 font-semibold">Company</h3>
                  <ul className="">
                    <li className="mt-2">About</li>
                    <li className="mt-2">Testimonials</li>
                    <li className="mt-2">Find a doctor</li>
                    <li className="mt-2">Apps</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="py-3 font-semibold">Region</h3>
                  <ul className="">
                    <li className="mt-2">Indonesia</li>
                    <li className="mt-2">Singapore</li>
                    <li className="mt-2">Hongkong</li>
                    <li className="mt-2">Canada</li>
                  </ul>
                </div>
                <div className="">
                  <h3 className="py-3 font-semibold">Help</h3>
                  <ul className="gap-y-12">
                    <li className="mt-2">Help Center</li>
                    <li className="mt-2">Contact support</li>
                    <li className="mt-2">Instructions</li>
                    <li className="mt-2">How it works</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-300 border-none" />
          <div className="text-center">
            © Okechukwu 2020 - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
