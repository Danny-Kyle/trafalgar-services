import React, {useEffect, useState} from "react";
import previous from "../images/Arrow Left.svg";
import next from "../images/Arrow Right.svg";
import group3 from "../images/Group 3.svg"
import ellipse from "../images/Ellipse 5.svg";
import Ellipses from "./Ellipses";
import Profile from "./CustomerProfiles";

const CustomerFeedback = () => {
const [item, setItem] = useState(0) 
console.log(item)
const [profile, setProfile] = useState(Profile[item])

const nextProfile = ()=> {
    if(item<3) return setItem(item + 1);
}

useEffect(() => {
    setProfile(Profile[item])
}, [item])

const previousProfile = ()=> {
   if(item>0) return setItem(item - 1);  
}
  return (
    <div>
      <div className="md:container md:mx-auto relative text-center ">
        <div>
            <img src={group3} alt="" className="absolute bottom-24 left-20" />
        </div>
        <div className="bg-hero-pattern p-8 w-4/5 rounded-3xl relative mx-auto text-white">
          <div className="text-2xl">
            <p>What our customers are saying</p>
            <hr className="h-0.5 bg-white mx-auto my-4 w-12" />
          </div>
          <div className="md:flex p-12 gap-x-64 text-left justify-center">
            <div className="md:flex gap-x-6 justify-center">
              <img
                src={profile.image}
                alt=""
                className="border border-white object-cover rounded-full w-32 h-32 ring-4 ring-white"
              />
              <div className="pt-12">
                <h3 className="text-xl">{profile.name}</h3>
                <p className="text-gray-100">{profile.position}</p>
              </div>
            </div>
            <div className="w-80 text-left">
                {profile.quote}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex mx-auto gap-x-4 justify-center">
            <div>
              <img src={previous} alt="" onClick={()=>previousProfile()} className="cursor-pointer" />
            </div>
            <div className="flex gap-x-3 pt-1">
              <Ellipses src={ellipse} onClick={()=> {}} />
              <Ellipses src={ellipse} onClick={()=> {}}/>
              <Ellipses src={ellipse} onClick={()=> {}}/>
              <Ellipses src={ellipse} onClick={()=> {}} />
            </div>
            <div>
              <img src={next} alt="" onClick={() => nextProfile()} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
