import React, { useEffect } from 'react';
import cap4 from '../assets/images/cap4.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const JoinSec = () => {
     useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return (
        <div>
            <div className="py-20 px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">

                    <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
                        <h2 className="text-lg text-gray-600 tracking-wide uppercase font-mono">
                            Want to Join with Us?
                        </h2>
                        <h1 className="text-[25px] text-gray-800 leading-tight mt-2 ">
                            Become a Proud <span className="text-indigo-500 italic">Volunteer</span>
                        </h1>
                        <p className="mt-4 text-gray-600 pe-5">
                            Donec placerat mi et tortor bibendum, at accumsan nunc accumsan. Vivamus sed nisl sit amet ex convallis imperdiet. Ut eget egestas libero.Donec placerat mi et tortor bibendum, at accumsan nunc accumsan.
                        </p>
                        <button className="relative mt-6 px-6 py-2 text-white text-lg font-semibold rounded-lg overflow-hidden shadow-lg group">
                            <span className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
                            <span className="relative z-10">Join Now</span>
                        </button>

                    </div>

                    <div className="md:w-1/2">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
                            <img
                                src={cap4}
                                alt="Fabric Design"
                                className="w-[500px] lg:w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900 bg-opacity-30"></div>
                            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow">
                               text
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinSec
