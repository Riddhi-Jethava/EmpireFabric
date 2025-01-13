import React from 'react'
import logo1 from '../assets/images/1.png';
import logo2 from '../assets/images/2 (1).png';
import logo3 from '../assets/images/3.png';
import logo4 from '../assets/images/4.png';

const Logos = () => {
    return (
        <div>
            <div className="bg-black py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl text-slate-100 mb-10">Our Trusted Partners</h2>
                    {/* Logos Container */}
                    <div className="flex justify-center items-center space-x-12">
                        {/* Logo 1 */}
                        <div className="transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                            <img src={logo1} alt="Logo 1" className="w-32 h-32 object-contain" />
                        </div>
                        {/* Logo 2 */}
                        <div className="transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                            <img src={logo2} alt="Logo 2" className="w-32 h-32 object-contain" />
                        </div>
                        {/* Logo 3 */}
                        <div className="transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                            <img src={logo3} alt="Logo 3" className="w-32 h-32 object-contain" />
                        </div>
                        {/* Logo 4 */}
                        <div className="transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3">
                            <img src={logo4} alt="Logo 4" className="w-32 h-32 object-contain" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Logos
