// ./src/Navbar.js
import React, { useState, useEffect } from "react";
import hotel_logo from "../assets/img/common/hotel_logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../style/main.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 p-1 transition-colors duration-300 ${
                isScrolled ? "bg-white text-black" : "bg-black bg-opacity-70 text-white"
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <button onClick={toggleMenu} className="lg:hidden p-2 focus:outline-none">
                    {isOpen ? (
                        <CloseIcon fontSize="large" className="text-slate-500" />
                    ) : (
                        <MenuIcon fontSize="large" className="text-slate-500" />
                    )}
                </button>

                <div className={`hidden lg:flex space-x-6 text-xl`}>
                    <a href="#rooms" className="hover:text-yellow-500">Rooms</a>
                    <a href="#offers" className="hover:text-yellow-500">Offers</a>
                </div>

                <div className="flex-1 flex justify-center">
                    <img src={hotel_logo} alt="Hotel Logo" className="h-18 w-44" />
                </div>

                <div className={`hidden lg:flex space-x-6 items-center text-xl`}>
                    <a href="#experiences" className="hover:text-yellow-500">Experiences</a>
                    <a href="#contact" className="hover:text-yellow-500">About us</a>
                    <a
                        href="#book"
                        className="px-4 py-2 bg-yellow-700 text-white font-semibold rounded hover:text-black text-xl"
                    >
                        Book Now
                    </a>
                </div>

                <div className="lg:hidden">
                    <a
                        href="#book"
                        className="px-4 py-2 bg-yellow-700 text-white font-semibold rounded hover:text-black text-xl"
                    >
                        Book Now
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden mt-4 text-center py-4 rounded-lg space-y-4 text-xl">
                    <a href="#rooms" className="block hover:text-gray-200">Rooms</a>
                    <a href="#offers" className="block hover:text-gray-200">Offers</a>

                    <a href="#experiences" className="block hover:text-gray-200">Experiences</a>
                    <a href="#contact" className="block hover:text-gray-200">Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;