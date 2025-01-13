import React, { useState } from 'react';
import testimonial1 from '../assets/images/testimonial-1.jpg';
import testimonial2 from '../assets/images/testimonial-2.png';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      text: 'I was in need of good quality disposable masks. The material is reliable, stitching is durable, and ear straps are elastic.',
      author: 'Patel Foods MD',
    },
    {
      id: 2,
      image: testimonial2,
      text: 'This mask is very useful in today situation. It provides comfort, is value for money, and protects from viruses.',
      author: 'Samyak Lifestyle Pvt Ltd',
    },
  ];

  // Navigate to a specific slide
  const navigateToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-600 mt-2">What our clients say about us</p>
      </div>

      {/* Slider */}
      <div className="relative max-w-4xl mx-auto mt-8 overflow-hidden">
        <div
          id="slider"
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-6">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full border-2 border-gray-300"
                />
                <p className="mt-6 text-gray-700 text-[17px] text-center">{testimonial.text}</p>
                <span className="text-gray-800 mt-4">- {testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Line */}
      <div className="flex justify-center mt-6 space-x-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-1 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => navigateToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;




// import React, { useEffect } from "react";

// const Testimonial = () => {
//   useEffect(() => {
//     const testim = document.getElementById("testim");
//     const testimDots = Array.from(document.getElementById("testim-dots").children);
//     const testimContent = Array.from(document.getElementById("testim-content").children);
//     const testimLeftArrow = document.getElementById("left-arrow");
//     const testimRightArrow = document.getElementById("right-arrow");
//     const testimSpeed = 4500;
//     let currentSlide = 0;
//     let currentActive = 0;
//     let testimTimer;
//     const ignoreTouch = 30;
//     let touchStartPos = 0;
//     let touchEndPos = 0;

//     const playSlide = (slide) => {
//       testimContent.forEach((content, index) => {
//         content.classList.remove("active", "inactive");
//         testimDots[index].classList.remove("active");
//       });

//       if (slide < 0) slide = currentSlide = testimContent.length - 1;
//       if (slide >= testimContent.length) slide = currentSlide = 0;

//       if (currentActive !== currentSlide) {
//         testimContent[currentActive].classList.add("inactive");
//       }
//       testimContent[slide].classList.add("active");
//       testimDots[slide].classList.add("active");

//       currentActive = currentSlide;

//       clearTimeout(testimTimer);
//       testimTimer = setTimeout(() => {
//         playSlide(currentSlide + 1);
//       }, testimSpeed);
//     };

//     testimLeftArrow.addEventListener("click", () => playSlide(currentSlide - 1));
//     testimRightArrow.addEventListener("click", () => playSlide(currentSlide + 1));

//     testimDots.forEach((dot, index) => {
//       dot.addEventListener("click", () => playSlide(index));
//     });

//     document.addEventListener("keyup", (e) => {
//       if (e.key === "ArrowLeft") testimLeftArrow.click();
//       if (e.key === "ArrowRight") testimRightArrow.click();
//     });

//     testim.addEventListener("touchstart", (e) => {
//       touchStartPos = e.changedTouches[0].clientX;
//     });

//     testim.addEventListener("touchend", (e) => {
//       touchEndPos = e.changedTouches[0].clientX;
//       const touchPosDiff = touchStartPos - touchEndPos;

//       if (touchPosDiff > ignoreTouch) testimLeftArrow.click();
//       if (touchPosDiff < -ignoreTouch) testimRightArrow.click();
//     });

//     playSlide(currentSlide);

//     return () => {
//       clearTimeout(testimTimer);
//     };
//   }, []);

//   return (
//     <div>
//       <section id="testim" className="testim mb-5 bg-red-900">
//         <div className="testim-cover">
//           <div className="wrap">
//             <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
//             <span id="left-arrow" className="arrow left fa fa-chevron-left"></span>
//             <ul id="testim-dots" className="dots">
//               <li className="dot active"></li>
//               <li className="dot"></li>
//               <li className="dot"></li>
//             </ul>
//             <div id="testim-content" className="cont">
//               <div className="active">
//                 <div className="img"></div>
//                 <h2>Lorem P. Ipsum</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                   enim ad minim veniam, quis nostrud exercitation ullamco.
//                 </p>
//               </div>
//               <div >
//                 <div className="img"></div>
//                 <h2>Lorem P. Ipsum</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                   enim ad minim veniam, quis nostrud exercitation ullamco.
//                 </p>
//               </div>
//               {/* Add more slides as needed */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonial;


