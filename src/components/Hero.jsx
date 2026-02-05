import React from 'react';
import { motion } from 'framer-motion';
import { Play, Rocket, ShieldCheck, Zap } from 'lucide-react';
import BackgroundWeb from './BackgroundWeb';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden min-h-screen flex items-center bg-slate-50">
            {/* Background Animation confined to Hero */}
            <BackgroundWeb className="absolute inset-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center py-4"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            Building the Future of <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Business Software.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Navanala is a next-gen technology partner for growing businesses.
                            We craft simple, powerful ERP & CRM solutions designed to help you scale fast from day one.
                        </p>


                        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                            {[
                                { icon: <Rocket className="text-blue-600 w-5 h-5" />, label: "Rapid Deployment" },
                                { icon: <Zap className="text-blue-600 w-5 h-5" />, label: "Modern Tech Stack" },
                                { icon: <ShieldCheck className="text-blue-600 w-5 h-5" />, label: "Secure by Design" },
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    {feature.icon}
                                    <span className="text-xs font-medium text-slate-600 leading-tight">{feature.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                    >
                        {/* Wrapper to contain floating elements */}
                        <div className="relative w-full max-w-lg lg:max-w-xl pb-10 pr-4">

                            {/* Main Dashboard Card - Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-20 w-full"
                            >
                                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                                    {/* Header */}
                                    <div className="h-10 border-b border-slate-200 flex items-center px-4 justify-between bg-white">
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                            </div>
                                            <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                                        </div>
                                        <div className="h-6 w-auto px-2 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">BETA 1.0</div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 grid grid-cols-2 gap-5">
                                        <div className="col-span-2">
                                            <p className="text-[10px] text-slate-500 uppercase font-semibold mb-1">Live Updates</p>
                                            <div className="flex items-center gap-3 bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <Rocket size={14} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-800">System Launch</p>
                                                    <p className="text-[10px] text-slate-500">All services operational</p>
                                                </div>
                                                <span className="ml-auto text-[10px] text-slate-400">Just now</span>
                                            </div>
                                        </div>

                                        <div className="col-span-2 h-32 bg-slate-50 rounded-lg border border-slate-100 relative overflow-hidden flex items-center justify-center">
                                            <div className="text-center">
                                                <p className="text-xs font-medium text-slate-400 mb-2">Real-time Analytics</p>
                                                <div className="text-2xl font-bold text-slate-300">Coming Soon</div>
                                            </div>
                                            {/* Blueprint Grid Lines */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-6 -right-2 lg:-right-6 w-40 bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-30 hidden md:block"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <Zap size={12} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-800">Fast Setup</p>
                                        <p className="text-[10px] text-slate-500">&lt; 5 Minutes</p>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[60%] bg-blue-500 rounded-full"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-2 lg:-bottom-4 -left-4 w-48 bg-slate-900 rounded-xl shadow-2xl p-4 z-30 hidden md:block"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white text-xs font-bold">Innovation Hub</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>
                                </div>
                                <p className="text-[10px] text-slate-400 leading-tight">
                                    We are crafting tools for the next generation of leaders.
                                </p>
                            </motion.div>
                        </div>

                        {/* Decorative Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
