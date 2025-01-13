import React from 'react';
import logo from '../assets/images/brand_logo.jpg'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="p-5">
            <div className='p-0 lg:p-5 text-center w-[80%] m-auto'>
                <p className='text-[14px] hidden lg:block text-gray-400'>Situated in Rajkot (Gujarat, India), we have constructed a wide and well-functional infrastructural unit that plays an important role in the growth of our company. We offer these products at reasonable rates and deliver these within the promised time-frame. Under the headship of “Mr. Mahesh Rakholiya” (Director Business Development), we have gained a huge clientele across the nation.</p>
            </div>
            <hr className='w-[60%] mx-auto my-4'/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                <div className="ps-2 hidden lg:block">
                    <img src={logo} alt="Logo" className="w-[160px] mb-2" />
                    <h1 className="text-sm mb-2">
                        Building the Future of Safety with Precision and Comfort
                    </h1>
                </div>

                <div className='p-0 lg:ps-5'>
                    <h1 className="text-lg pb-3 font-semibold p-0 lg:ps-5">Quick Links</h1>
                    <nav className="text-sm flex flex-col leading-7 p-0 lg:ps-5">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <Link to="/" className="hover:text-blue-600">About</Link>
                        <Link to="/" className="hover:text-blue-600">Products</Link>
                        <Link to="/" className="hover:text-blue-600">Contact</Link>
                    </nav>
                </div>

                <div>
                    <h1 className="text-lg pb-3 font-semibold">Reach Us</h1>
                    <p className="text-sm leading-6">
                        Shed NO. 3 Plot NO. I . Survey NO. 19. Opp. Punam Dumper, Bhawani Chowk,
                        Vavadi, Rajkot, Gujarat. 360004
                    </p>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-lg pb-3 font-semibold">Let's Chat</h1>
                    <a href="tel:+919316469878" className="text-sm text-red-600 mb-2">
                        <span className="font-semibold text-black">Call:</span> +91 9316469878
                    </a>
                    <a href="mailto:info.empirefabric@gmail.com" className="text-sm text-red-600">
                        <span className="font-semibold text-black">Email:</span> info.empirefabric@gmail.com
                    </a>
                </div>
            </div>

            <hr className="w-[90%] mx-auto my-4" />

            <div className="flex flex-wrap justify-between items-center w-[90%] mx-auto text-sm text-gray-500">
                <p className="text-center w-full lg:w-auto">
                    © 2024 Empire Fabric. All Rights Reserved
                </p>
                <div className="flex justify-center lg:justify-end gap-4 w-full lg:w-auto mt-2 lg:mt-0">
                    <FaFacebookF className="p-1 text-[24px] cursor-pointer hover:text-blue-600" />
                    <FaTwitter className="p-1 text-[24px] cursor-pointer hover:text-blue-400" />
                    <FaInstagram className="p-1 text-[24px] cursor-pointer hover:text-pink-600" />
                    <FaGooglePlusG className="p-1 text-[24px] cursor-pointer hover:text-red-600" />
                    <FaPinterestP className="p-1 text-[24px] cursor-pointer hover:text-red-400" />
                </div>
            </div>
        </div>
    )
}

export default Footer