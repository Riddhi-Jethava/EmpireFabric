import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallary1 from "../assets/images/cap1.jpg";
import gallary2 from "../assets/images/gloves1.jpg";

const BigSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      img: gallary1,
      title: "Teimagine Digital Experience with",
      headline: "Start-ups and solutions",
      description:
        "We help entrepreneurs, start-ups and enterprises shape their ideas into products",
    },
    {
      img: gallary2,
      title: "Reimagine Digital Experience with",
      headline: "Intelligent solutions",
      description:
        "We help entrepreneurs, start-ups and enterprises shape their ideas into products",
    },
  ];

  return (
    <div className="relative">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Slide Image */}
            <img src={slide.img} alt={`Slide ${index + 1}`} className="w-[100%] h-[580px] object-cover" />
            {/* Slide Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4" data-aos="fade-up">
                <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
                <h2 className="text-2xl font-semibold">{slide.title}</h2>
                <h1 className="text-4xl font-bold my-2">{slide.headline}</h1>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BigSlider;
