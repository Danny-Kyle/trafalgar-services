import React from "react";
import dots from "../images/element2.svg";
import element from "../images/trafalgar-illustration sec02 1.svg";

const LeadingHealthcareProviders = () => {
  return (
    <div>
      <div className="md:container md:mx-auto flex p-28 relative gap-x-5 justify-center">
        <div className="absolute bottom-12 right-0 -z-10">
            <img src={dots} alt="" />
        </div>
        <div className="p-8">
          <img src={element} alt="" />
        </div>
        <div>
          <div className="font-semibold text-3xl">
            <p className="py-2">Leading healthcare</p> providers
            <hr className="h-0.5 bg-black my-4 w-12"/>
          </div>
          <div className="py-8 w-96 text-gray-400">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </div>
          <div className="">
          <button className="text-blue-600 font-semibold hover:text-white hover:bg-blue-400 bg-white border shadow-2xl border-blue-600 py-4 px-6 rounded-3xl">
            Learn More
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default LeadingHealthcareProviders;
