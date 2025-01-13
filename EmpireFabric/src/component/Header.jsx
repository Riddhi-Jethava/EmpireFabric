import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/brand_logo.jpg';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaPinterestP, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleTabChange = () => setIsMenuOpen(false);
        window.addEventListener('blur', handleTabChange);
        return () => {
            window.removeEventListener('blur', handleTabChange);
        };
    }, []);

    return (
        <div>
            {/* Top Bar */}
            <div className="hidden lg:flex justify-between bg-gray-600 text-white p-2">
                <div className="flex text-[14px]">
                    <h1>Monday-Friday: 8:00 am to 5:00 pm</h1>
                    <h1 className='px-2'> | </h1>
                    <a href="tel:+919316469878">+91 93164 69878</a>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaFacebookF className='border rounded-full p-1 text-[20px] bg-gray-200 text-gray-950 hover:scale-110 transition-transform' />
                    <FaTwitter className='border rounded-full p-1 text-[20px] bg-gray-200 text-gray-950 hover:scale-110 transition-transform' />
                    <FaInstagram className='border rounded-full p-1 text-[20px] bg-gray-200 text-gray-950 hover:scale-110 transition-transform' />
                    <FaGooglePlusG className='border rounded-full p-1 text-[20px] bg-gray-200 text-gray-950 hover:scale-110 transition-transform' />
                    <FaPinterestP className='border rounded-full p-1 text-[20px] bg-gray-200 text-gray-950 hover:scale-110 transition-transform' />
                </div>
            </div>

            {/* Main Header */}
            <header className="h-[70px] flex justify-between items-center px-4 shadow-md sticky top-0 bg-white">
                <div className="logo w-[15%] flex justify-center items-center">
                    <a href=""><img src={logo} alt="Logo" className="w-[100px] md:w-[120px]" /></a>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex w-[30%] justify-evenly items-center text-[16px]">
                    <Link
                        to="/"
                        className="relative group"
                    >
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/about"
                        className="relative group"
                    >
                        About
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/product"
                        className="relative group"
                    >
                        Products
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/contact"
                        className="relative group"
                    >
                        Contact
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isMenuOpen ? <FaTimes className="text-blue-500" /> : <FaBars className="text-blue-500" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav
                    ref={menuRef}
                    className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 z-10"
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-3xl text-white"
                    >
                        <FaTimes />
                    </button>

                    <Link
                        to="/"
                        onClick={toggleMenu}
                        className="relative group text-lg"
                    >
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/about"
                        onClick={toggleMenu}
                        className="relative group text-lg"
                    >
                        About
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/product"
                        onClick={toggleMenu}
                        className="relative group text-lg"
                    >
                        Products
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/contact"
                        onClick={toggleMenu}
                        className="relative group text-lg"
                    >
                        Contact
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>
            )}
        </div>
    );
};

export default Header;