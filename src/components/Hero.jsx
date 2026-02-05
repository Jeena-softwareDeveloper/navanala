import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight, Server, Globe, Zap, X } from 'lucide-react';
import BackgroundWeb from './BackgroundWeb';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex items-center bg-slate-50">
            {/* Background Animation confined to Hero */}
            <BackgroundWeb className="absolute inset-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center"
                    >


                        {/* Reduced Text Sizes for better responsiveness */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                            Powering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                                Textile Revolution.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                            Navanala equips Spinning Mills, Weaving Units, and Garment Manufacturers with intelligent ERP solutions to optimize production and maximize profits.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                            <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                                Get a Demo <ChevronRight size={18} />
                            </button>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                            >
                                <Play size={16} className="text-blue-600" fill="currentColor" /> Watch Video
                            </button>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-8 border-t border-slate-200/60 pt-6 sm:pt-8 w-full sm:w-auto overflow-x-auto">
                            <div className="shrink-0">
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900">50+</p>
                                <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wide mt-1">Spinning Mills</p>
                            </div>
                            <div className="w-px h-8 sm:h-10 bg-slate-200"></div>
                            <div className="shrink-0">
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900">1M+</p>
                                <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wide mt-1">Spindles Tracked</p>
                            </div>
                            <div className="w-px h-8 sm:h-10 bg-slate-200"></div>
                            <div className="shrink-0">
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900">100%</p>
                                <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wide mt-1">Uptime</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
                    >
                        {/* Wrapper to contain floating elements */}
                        <div className="relative w-full max-w-lg lg:max-w-xl">

                            {/* Main Dashboard Card - Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-2 sm:p-3 z-20 w-full backdrop-blur-xl"
                            >
                                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
                                    {/* Header */}
                                    <div className="h-10 sm:h-12 border-b border-white/10 flex items-center px-4 justify-between bg-slate-800/80">
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
                                                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="text-[9px] sm:text-[10px] font-bold text-green-400 uppercase tracking-wider">System Optimal</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 sm:p-6 grid grid-cols-2 gap-4 sm:gap-6">
                                        {/* Stat Card 1 */}
                                        <div className="bg-slate-700/30 p-3 sm:p-4 rounded-xl border border-white/5">
                                            <div className="flex justify-between items-start mb-2 sm:mb-4">
                                                <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                                    <ActivityGraph />
                                                </div>
                                                <span className="text-emerald-400 text-[10px] sm:text-xs font-bold">+12.5%</span>
                                            </div>
                                            <p className="text-slate-400 text-[9px] sm:text-xs uppercase font-bold tracking-wider mb-1">Production Efficiency</p>
                                            <p className="text-lg sm:text-2xl font-bold text-white">94.2%</p>
                                        </div>

                                        {/* Stat Card 2 */}
                                        <div className="bg-slate-700/30 p-3 sm:p-4 rounded-xl border border-white/5">
                                            <div className="flex justify-between items-start mb-2 sm:mb-4">
                                                <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                                    <Server size={18} />
                                                </div>
                                                <span className="text-slate-400 text-[10px] sm:text-xs font-bold">Active</span>
                                            </div>
                                            <p className="text-slate-400 text-[9px] sm:text-xs uppercase font-bold tracking-wider mb-1">Active Spindles</p>
                                            <p className="text-lg sm:text-2xl font-bold text-white">24,500</p>
                                        </div>

                                        {/* Graph Area */}
                                        <div className="col-span-2 h-28 sm:h-40 bg-slate-700/30 rounded-xl border border-white/5 relative overflow-hidden flex items-end p-2 sm:p-4 gap-1 sm:gap-2">
                                            {[40, 65, 55, 80, 70, 90, 85, 95, 60, 75, 85, 100].map((h, i) => (
                                                <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors relative group">
                                                    <div
                                                        className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-1000"
                                                        style={{ height: `${h}%` }}
                                                    ></div>
                                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded pointer-events-none transition-opacity hidden sm:block">
                                                        {h}%
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements - Updated to Dark Theme */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -right-2 sm:-right-8 w-40 sm:w-48 bg-slate-800 rounded-xl shadow-xl border border-slate-700 p-3 sm:p-4 z-30 hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                        <Zap size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm font-bold text-white">Power Usage</p>
                                        <p className="text-[10px] text-slate-400">Real-time IOT</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2 text-white font-mono text-base sm:text-lg">
                                    <span>450</span> <span className="text-[10px] sm:text-xs text-slate-500 mb-1">KW/h</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 w-48 sm:w-56 bg-white rounded-xl shadow-2xl p-3 sm:p-4 z-30 hidden md:block border border-slate-100"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-slate-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Global Export</span>
                                    <Globe size={14} className="text-blue-500" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-white bg-slate-200`}></div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-slate-500 leading-tight">
                                        Shipping to 12+ Countries
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
                    </motion.div>

                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-md transition-all"
                                onClick={() => setIsVideoOpen(false)}
                            >
                                <X size={20} />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/vT_t4HS3jvk?autoplay=1&rel=0"
                                title="Navanala Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Simple SVG Component for graph icon
const ActivityGraph = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

export default Hero;
