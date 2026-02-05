import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass } from 'lucide-react';

const VisionMission = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Compass size={40} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Strategic Roadmap</h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span>Integrate AI into every loom & spindle.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span>Zero-latency global export tracking.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Sustainable manufacturing protocols.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Decorative border outline */}
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-slate-700 rounded-3xl -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                    <Eye size={32} />
                                </div>
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                            </div>
                            <p className="text-lg text-slate-400 leading-relaxed border-l-4 border-blue-600 pl-6">
                                To be the global operating system for the textile industry, where every thread produced is tracked, optimized, and delivered through intelligent digital infrastructure.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                                    <Target size={32} />
                                </div>
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-lg text-slate-400 leading-relaxed border-l-4 border-purple-600 pl-6">
                                We exist to eliminate inefficiency in manufacturing. By democratizing access to enterprise-grade tools, we empower small mills and large conglomerates alike to scale without limits.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
