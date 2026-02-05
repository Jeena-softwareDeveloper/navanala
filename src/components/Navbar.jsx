import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
            {/* Spinning Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
            />

            {/* Pulsing Core Background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm"
            />

            {/* Main Hexagon N Shape */}
            <svg width="24" height="28" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 sm:w-6 sm:h-7">
                <motion.path
                    d="M7 2L2 9.5L7 24.5L21 9.5L26 24.5L21 30"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
                <defs>
                    <linearGradient id="gradient" x1="2" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Industries', path: '/industries' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const textColor = 'text-slate-800';
    const bgColor = scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent';
    const paddingY = scrolled ? 'py-3' : 'py-5';

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 transition-all duration-300 ${paddingY} ${bgColor}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center relative">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 group outline-none relative z-50" onClick={() => setIsOpen(false)}>
                        <Logo />

                        {/* Animated Gradient Text */}
                        <motion.span
                            className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            Navanala
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium tracking-wide text-sm hover:text-blue-600 transition-colors relative group ${textColor} ${location.pathname === link.path ? 'text-blue-600 font-semibold' : ''}`}
                            >
                                {link.name}
                                <span className={`absolute left-0 bottom-[-5px] h-[2px] bg-blue-600 transition-all duration-300 rounded-full group-hover:w-full ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
                            </Link>
                        ))}
                        <Link to="/contact">
                            <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                                Get Demo
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Z-index fixed to be above overlay */}
                    <button
                        className={`lg:hidden p-2 -mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors relative z-50`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Fixed Full Screen */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
                        style={{ top: 0, bottom: 0, left: 0, right: 0, height: '100vh', width: '100vw' }}
                    >
                        {/* Menu Content */}
                        <div className="flex flex-col space-y-4 w-full h-full">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                        className={`p-4 rounded-xl text-lg font-bold flex justify-between items-center w-full ${location.pathname === link.path ? 'bg-blue-50/50 text-blue-600' : 'text-slate-800 hover:bg-slate-50'}`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-blue-600 shadow-sm shadow-blue-500"></div>}
                                    </motion.div>
                                </Link>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 pt-6 border-t border-slate-100 w-full"
                            >
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-transform">
                                        Book a Free Demo
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
