import React, { useEffect } from 'react';
import Header from './../component/Header';
import cap1 from '../assets/images/cap1.jpg';
import gown from '../assets/images/gown.jpg';
import Footer from './../component/Footer';
import JoinSec from './../component/JoinSec';
import CategorySidebar from './../component/CategorySidebar';
import Logos from './../component/Logos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BigSlider from './../component/BigSlider';
import ScrollToTopButton from './../component/ScrollToTopButton';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='overflow-hidden'>
      <ScrollToTopButton />
      <Header />
      <BigSlider />
      <div className="flex flex-col md:flex-row justify-center items-center mb-5">
        {/* Text Content */}
        <div
          className="w-full md:w-[50%] pt-5 p-[5%] flex flex-col justify-evenly text-center items-center"
          data-aos="fade-right"
        >
          <h1 className="text-[clamp(4vw, 2rem, 26px)]">
            Welcome To{" "}
            <span className="text-blue-800 italic">EMPIRE FABRIC</span>
          </h1>
          <h1 className="w-[20%] border text-center mt-[2%] mb-[2%]"></h1>
          <h3 className="font-semibold mt-[3%] mb-[3%] text-[clamp(3vw, 1.5rem, 20px)]">
            “Building the Future of Safety with Precision and Comfort.”
          </h3>
          <p className="text-[clamp(3vw, 1rem, 14px)] px-[5%] pb-[5%] text-gray-600 leading-[1.8]">
            At Go Green, we specialize in producing top-quality surgeon wear, gloves,
            and apparel that combine exceptional protection with ultimate comfort. Our
            products are designed to meet the highest standards of safety, durability,
            and reliability, ensuring professionals like you can work confidently in
            any environment. We are committed to innovation, sustainability, and
            craftsmanship to bring you the best in protective gear.
          </p>
          <h1 className="text-[clamp(4vw, 1.5rem, 18px)] italic">
            - David Warner /{" "}
            <span className="text-gray-500 text-[clamp(3vw, 0.8rem, 13px)]">
              Event Co-Ordinator
            </span>
          </h1>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-[40%] mt-5 md:mt-0 flex justify-center"
          data-aos="fade-left"
        >
          <img src={cap1} alt="" className="w-[80%] md:w-full shadow-2xl" />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between mt-5'>
        <div className='w-[80%] lg:w-[760px] h-[380px] lg:h-[454px] mt-5 lg:mt-0' data-aos="fade-right">
          <img src={gown} alt="" className='w-[100%] h-[100%]' />
        </div>
        <div className=' w-[85%] lg:w-[760px] px-5 mt-5 lg:p-5 flex justify-center items-center bg-slate-50' id='bgGownSection' data-aos="fade-left">
          <div className='w-[640px] h-[410px] lg:p-5'>
            <h1 className='text-[22px] font-sans font-semibold leading-8'>
              FUEL <span className='text-blue-800 italic'>EFFCIENT</span> COOKSTOVES &<br />FOREST ANIMAL PLANNING
            </h1>
            <h1 className='w-[100px] border text-center mt-3 mb-3'></h1>
            <p className='text-[14px] pe-5 text-gray-600 leading-6'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. Contrary to popular belief. It has roots in a piece of classical Latin literature Contrary to popular belief.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className='w-[80%] mx-auto'>
          <h1 className='text-[28px] mt-5 mb-4 ps-3 pt-2 pb-3' data-aos="fade-up">Our Products_</h1>
          <CategorySidebar />
        </div>
      </div>
      <JoinSec />
      <Logos />
      <Footer />
    </div>
  );
}

export default Home;
