import React from "react";
import dots from "../images/element2.svg";
import illustration from "../images/trafalgar-header illustration 1.svg";

const virtualHealthcare = () => {
  return (
    <div className="pt-16">
      <div className="flex relative justify-between md:container md:mx-auto gap-x-40">
        <div className="absolute top-0 left-0">
          <img src={dots} alt="" />
        </div>
        <div className="py-4 lg:pl-32 lg:py-24">
          <div className="font-semibold text-3xl">
            <h2>Virtual healthcare</h2>
            <h2>for you</h2>
          </div>
          <div className="py-8 text-gray-400">
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>
          <div>
            <button className="text-white bg-blue-400 w-56 py-4 px-6 rounded-3xl">
              Consult Today
            </button>
          </div>
        </div>
        <div className="lg:pr-32 pb-12">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default virtualHealthcare;
