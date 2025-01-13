import React from 'react';
import Header from './../component/Header';
import JoinSec from './../component/JoinSec';
import Footer from './../component/Footer';
import Testimonial from './../component/Testimonial';
import Logos from './../component/Logos';
import ScrollToTopButton from './../component/ScrollToTopButton';

const About = () => {
    
    return (
        <div className='overflow-hidden'>
            <Header />
            <ScrollToTopButton />
            {/* Hero Section */}
            <div className="h-[300px] relative bg-gray-800 flex flex-col justify-center items-center text-white">
                <h1 className="text-[35px] font-bold">About Us</h1>
                <div className="flex items-center space-x-2 text-gray-400 mt-2">
                    <a href="/" className="text-blue-500 hover:underline">
                        Home
                    </a>
                    <span>/</span>
                    <span>About</span>
                </div>
            </div>

            {/* About Content Section */}
            <div className="flex justify-center items-center">
                <div className="p-5 w-full md:w-[75%] text-center shadow-md mt-5 bg-gray-50">
                    <h1 className="text-[30px] font-semibold">
                        Welcome To <span className="text-blue-600 italic">EMPIRE FABRIC</span>
                    </h1>
                    <div className="w-[100px] h-[2px] bg-blue-600 m-auto my-5"></div>
                    <p className=" pb-3 text-[16px] font-light italic">
                        “Contrary to popular belief, Lorem Ipsum is not simply roots in a piece of classical Latin literature.”
                    </p>
                    <p className="text-gray-500 text-[16px] leading-relaxed mb-4">
                        Curabitur vitae ullamcorper libero. Risus id augue felis cras luctus nisi in tincidunt blandit sapien. 
                        Mi vestibulum est commodo lobortis metus mauris vitae purus. Blandit fermentum quam eget urna quis sem 
                        pharetra ultricies lacinia. Hendrerit massa non blandit ex accumsan. Aenean eleo.
                    </p>
                    <h1 className="text-[20px] italic pt-3 font-semibold">
                        David Warner <span className="text-gray-400 text-[14px]">/ Event Co-Ordinator</span>
                    </h1>
                </div>
            </div>

            {/* Additional Sections */}
            <JoinSec />
            <Testimonial />
            <Logos />
            <Footer />
        </div>
    );
};

export default About;

