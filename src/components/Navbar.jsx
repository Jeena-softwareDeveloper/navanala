import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
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
            <svg width="24" height="28" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Industries', path: '/industries' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const textColor = 'text-slate-800';
    const bgColor = scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent';
    const paddingY = scrolled ? 'py-3' : 'py-5';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${paddingY} ${bgColor}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group z-50 outline-none">
                    <Logo />

                    {/* Animated Gradient Text */}
                    <motion.span
                        className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 bg-[length:200%_auto]"
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
                            className={`font-medium tracking-wide text-sm hover:text-primary transition-colors relative group ${textColor} ${location.pathname === link.path ? 'text-blue-600' : ''}`}
                        >
                            {link.name}
                            <span className={`absolute left-0 bottom-[-5px] h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden ${textColor} z-50`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-0 left-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6"
                    >
                        <button
                            className={`absolute top-6 right-6 ${textColor} z-50`}
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} />
                        </button>
                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl text-slate-800 font-semibold hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="w-full h-px bg-slate-100"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
