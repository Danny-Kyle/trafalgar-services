import React from 'react'
import logo from "../images/Group 1.svg"

const Navbar = () => {
  return (
    <div className="md:container md:mx-auto">
        <div className="pt-12">
            <nav className="flex justify-between">
                <div className='flex'>
                    <img src={logo} alt="Trafalgar"/>
                </div>
                <ul className='flex cursor-pointer text-gray-300 gap-x-16'>
                    <li className="hover:font-semibold hover:text-black">Home</li>
                    <li className="hover:font-semibold hover:text-black">Find a doctor</li>
                    <li className="hover:font-semibold hover:text-black">Apps</li>
                    <li className="hover:font-semibold hover:text-black">Testimonials</li>
                    <li className="hover:font-semibold hover:text-black">About Us</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar