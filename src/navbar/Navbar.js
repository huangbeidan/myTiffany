import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Top bar for logo centered */}
            <div className="bg-white px-4 py-2 flex justify-center items-center shadow-md">
                <div className="font-semibold text-lg text-gray-800">
                Sophia & Amanda's Sparkles
                </div>
            </div>

            {/* Main navigation bar, hidden on mobile and visible from medium screens up */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Primary Navbar items centered, visible only on md screens and larger */}
                        <div className="hidden md:flex flex-grow justify-center items-center space-x-7">
                            <a href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</a>
                            <a href="/collections" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Collections</a>
                            <a href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About Us</a>
                            <a href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
                        </div>
                        {/* Login and Cart on the right, visible only on md screens and larger */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="/login" className="text-gray-600 hover:text-blue-500 transition duration-300">
                                Login
                            </a>
                            <a href="/cart" className="relative text-gray-600 hover:text-blue-500 transition duration-300">
                                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 3h4l.713 4.287M9.43 11L4 21v2h2l12.5-12.5-2.5-2.5L11 14.5M5 6h18l-2 13H6L5 6zm16-3V6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu, shown only on small screens */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Home</a>
                <a href="/collections" className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Collections</a>
                <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">About Us</a>
                <a href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Contact</a>
                <a href="/login" className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Login</a>
                <a href="/cart" className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Cart</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center justify-end p-4">
                <button onClick={toggleMenu} className="text-gray-500 hover:text-blue-500">
                    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
