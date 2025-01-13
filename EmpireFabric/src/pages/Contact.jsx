import React, { useEffect } from 'react';
import Header from './../component/Header';
import { IoPhonePortraitOutline, IoMailOpenOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import Footer from './../component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from './../component/ScrollToTopButton';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='overflow-hidden'>
            <Header />
            <ScrollToTopButton />
            <div>
                <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative bg-gray-800 mb-5 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-[28px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-white">
                            Contact Us
                        </h1>
                    </div>
                </div>
                <div className='pt-5'>
                    <div className='flex justify-center lg:justify-between  items-center flex-wrap w-[70%] m-auto h-auto'>
                        <form className='flex flex-wrap justify-between items-center w-full lg:w-[55%]' data-aos="fade-left">
                            <h1 className='w-full text-[20px]'>Send Us Message</h1>
                            <p className='text-[14px] mt-2 mb-3 text-gray-500'>
                                Product management twitter rockstar mass market value proposition pivot venture partnership social proof hypotheses innovator founders.
                            </p>
                            <input type="text" name="" id="" className='border px-2 w-full sm:w-[49%] h-[50px] rounded-lg mt-3' placeholder='Email' />
                            <input type="text" name="" id="" className='border px-2 w-full sm:w-[49%] h-[50px] rounded-lg mt-3' placeholder='Phone' />
                            <input type="text" name="" id="" className='border px-2 w-full h-[50px] rounded-lg mt-3' placeholder='Name' />
                            <textarea name="" id="" placeholder='Message' className='px-2 py-2 border w-full h-[100px] rounded-lg mt-3 mb-3' />
                            <button className='border px-[35px] py-[10px] rounded-md'>Submit</button>
                        </form>
                        <div className='rounded-lg w-[100%] lg:w-[35%] py-5 lg:py-0 px-4 p-3 lg:p-5 shadow-lg bg-sky-200 mt-5 sm:mt-0' data-aos="fade-right">
                            <h1 className='text-[18px] le:text-[22px] text-center lg:text-left '>Our Newsletters</h1>
                            <p className='pt-3 pb-5 text-[14px] text-gray-600 hidden lg:block'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vitae, doloribus quo, veniam odio esse in a et saepe quasi eaque facilis molestiae dolore sequi alias ut voluptate minima animi!
                            </p>
                            <input type="email" name="" id="" placeholder='Email' className='border w-full rounded-md mt-4 lg:mt-2 mb-3 p-2 lg:p-2' />
                            <button className='w-full rounded-md p-2 lg:p-2 bg-blue-950 text-white'>Submit</button>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col lg:flex-row justify-between w-[70%] mx-auto mt-5 pt-3 pb-3 font-sans' id='contact'>
                    <div className='p-5 w-[100%] lg:w-[30%] h-[160px] rounded-lg shadow-md bg-slate-200 mt-3 lg:mt-0' data-aos="fade-left">
                        <h1 className='pb-3 flex items-center'><span className='text-[20px] pe-1 font-semibold'><IoPhonePortraitOutline /></span>+91 93164 69878</h1>
                        <p className='text-[14px] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='p-5 w-[100%] lg:w-[30%] h-[160px] rounded-lg shadow-md bg-slate-100 mt-3 lg:mt-0' data-aos="fade-right">
                        <a href="" className='pb-3 flex items-center'><span className='text-[20px] font-semibold'><IoMailOpenOutline /></span> info.empirefabric@gmail.com</a>
                        <p className='text-[14px] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='p-5 w-[100%] lg:w-[30%] h-[160px] rounded-lg shadow-md bg-slate-50 mt-3 lg:mt-0' data-aos="fade-left">
                        <h1 className='pb-3 flex items-center'><span className='text-[20px] pe-1 font-semibold'><SlLocationPin /></span>Rajkot, Gujarat.</h1>
                        <p className='text-[14px] text-gray-600'>Monday-Friday: 8:00 am to 5:00 pm</p>
                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-5 bg-slate-300 rounded-xl'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7098.062583396932!2d70.796426!3d22.228661!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDEzJzQzLjIiTiA3MMKwNDcnNTYuMyJF!5e1!3m2!1sen!2sin!4v1736496543413!5m2!1sen!2sin" width="100%" height="260" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-lg'></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;