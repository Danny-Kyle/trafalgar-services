import React from "react";
import bgPic from "../images/backgroundPicture.svg";
import dots from "../images/element.svg";
import search from "../images/Search button.svg";
import details from "../images/details.svg";
import emergence from "../images/emergence.svg";
import tracking from "../images/tracking.svg";
import frame from "../images/Frame.svg";
import pillbottle from "../images/pillbottle.svg";
import OurServicesDetail from "./OurServicesDetail";

const OurServices = () => {
  return (
    <div className="py-8">
      <div className="md:container md:mx-auto relative">
        <div className="text-center">
          <h3 className="py-8 font-semibold">Our services</h3>
          <div className="h-0.5 my-4 bg-gray-900 w-10 mx-auto"></div>
        </div>
        <div className="absolute -left-52 -z-20">
          <img src={bgPic} alt="" />
        </div>
        <div className="text-center">
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment
          </p>
          <p>
            with our highly qualified doctors you can consult with us which type
            of service is suitable for your health
          </p>
        </div>
        <div className="md:container md:mx-auto py-8">
          <div className="absolute right-8 bottom-96 -z-10">
            <img src={dots} alt="" />
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-10">
            <OurServicesDetail
              src={search}
              header="Search doctor"
              label="Choose your doctor from thousands of specialist, general, and trusted hospitals"
            />
            <OurServicesDetail
              src={pillbottle}
              header="Online pharmacy"
              label="Buy your medicines with our mobile application with a simple delivery system"
            />
            <OurServicesDetail
              src={frame}
              header="Consultation"
              label="Free consultation with our trusted doctors and get the best recomendations"
            />
            <OurServicesDetail
              src={details}
              header="Details info"
              label="Free consultation with our trusted doctors and get the best recomendations"
            />
            <OurServicesDetail
              src={emergence}
              header="Emergency care"
              label="You can get 24/7 urgent care for yourself or your children and your
                lovely family"
            />
            <OurServicesDetail
              src={tracking}
              header="Tracking"
              label="Track and save your medical history and health data "
            />
          </div>
        </div>
        <div className="text-center">
          <button className="text-blue-600 font-semibold hover:text-white hover:bg-blue-400 bg-white border shadow-2xl border-blue-600 py-4 w-56 px-6 rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
