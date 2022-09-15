import React from "react";

const OurServicesDetail = ({ src, header, label }) => {
  return (
    <div className="hover:scale-110 duration-150 ease-in-out cursor-pointer transition md:w-56 mx-auto bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl">
      <div className="md:block flex">
        <div className="md:shrink-0 md:p-8">
          <img src={src} alt="" className="py-2"/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {header}
          </div>
          <p className="mt-2 text-slate-500">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default OurServicesDetail;
