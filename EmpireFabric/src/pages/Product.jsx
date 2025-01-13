import React, { useState } from 'react';
import Header from './../component/Header';
import gallary1 from '../assets/images/cap1.jpg';
import gallary2 from '../assets/images/BOUFFANT CAP.jpg';
import gallary3 from '../assets/images/non-woven-disposable-apron.jpg';
import gallary4 from '../assets/images/gloves1.jpg';
import gallary5 from '../assets/images/cap4.jpg';
import gallary6 from '../assets/images/Non-Woven Shoe Cover.webp'
import gallary7 from '../assets/images/apron.jpg';
import gallary8 from '../assets/images/combo.jpg';
import gallary9 from '../assets/images/gloves2.jpg';
import gallary10 from '../assets/images/gloves3.jpg';
import gallary11 from '../assets/images/gown.jpg';
import gallary12 from '../assets/images/plastic.jpg';
import gallary13 from '../assets/images/non-woolen-bed.webp';
import gallary14 from '../assets/images/mask.webp'
import Footer from './../component/Footer';
import ScrollToTopButton from './../component/ScrollToTopButton';

const Product = () => {
  const images = [
    gallary1, gallary2, gallary3, gallary4, gallary5, gallary6, gallary7,
    gallary8, gallary9, gallary10, gallary11, gallary12, gallary13, gallary14,
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleModalOpen = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='overflow-hidden'>
      <Header />
      <ScrollToTopButton />
      <div>
        <div className="h-[300px] relative bg-gray-800">
          <div className="text">
            <h1 className="text-[35px] text-white">Our Gallery</h1>
            <div className="flex items-center space-x-2 text-gray-600">
              <a href="/" className="text-blue-600">
                Home
              </a>
              <span>/</span>
              <span>Product</span>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <div className="w-[80%] m-auto">
            <div className="flex flex-wrap justify-between gap-6">
              {/* Manually created divs */}
              <div className="w-[788px] h-[250px] relative group shadow-md">
                <img
                  src={gallary1}
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center ">
                  <button
                    onClick={() => handleModalOpen(0)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[400px] h-[250px] relative group shadow-md">
                <img
                  src={gallary2}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[385px] h-[250px] relative group shadow-md">
                <img
                  src={gallary3}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[385px] h-[250px] relative group shadow-md">
                <img
                  src={gallary4}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[385px] h-[250px] relative group shadow-md">
                <img
                  src={gallary5}
                  alt="Gallery 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(3)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[400px] h-[250px] relative group shadow-md">
                <img
                  src={gallary6}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[788px] h-[250px] relative group shadow-md">
                <img
                  src={gallary7}
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(0)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[788px] h-[250px] relative group shadow-md">
                <img
                  src={gallary8}
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(0)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[400px] h-[250px] relative group shadow-md">
                <img
                  src={gallary9}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[385px] h-[250px] relative group shadow-md">
                <img
                  src={gallary10}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[385px] h-[250px] relative group shadow-md">
                <img
                  src={gallary11}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className=" w-[385px] h-[250px] relative group shadow-md">
                <img
                  src={gallary12}
                  alt="Gallery 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(3)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[400px] h-[250px] relative group shadow-md">
                <img
                  src={gallary13}
                  alt="Gallery 2"
                  className="w-full h-[100%] object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(1)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" w-[788px] h-[250px] relative group shadow-md">
                <img
                  src={gallary14}
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-5 transition-[1s] bg-black bg-opacity-50 -z-20 group-hover:z-20 cursor-pointer flex items-center justify-center">
                  <button
                    onClick={() => handleModalOpen(0)}
                    className="text-white text-[35px] font-bold hover:scale-[1.3] focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add more unique divs here */}
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleModalClose}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing
          >
            <img
              src={images[currentIndex]}
              alt={`Full view ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-3xl bg-black p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
              onClick={handleModalClose}
            >
              &times;
            </button>

            {/* Previous Arrow */}
            <button
              className="fixed left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
              onClick={handlePrevImage}
            >
              &larr;
            </button>

            {/* Next Arrow */}
            <button
              className="fixed right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
              onClick={handleNextImage}
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Product;