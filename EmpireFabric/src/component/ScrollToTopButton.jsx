import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300
            md:p-4 lg:p-5 md:right-4 lg:right-6 md:bottom-4 lg:bottom-6"
          style={{ zIndex: 10 }} // Inline z-index for fine-grained control
        >
          <FaArrowUp className="text-xl md:text-2xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
