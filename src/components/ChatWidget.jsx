import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Mail, Phone } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasInteracted) {
                setIsOpen(true);
            }
        }, 5000); // Open after 5 seconds

        return () => clearTimeout(timer);
    }, [hasInteracted]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Contact Us</h3>
                                    <p className="text-blue-100 text-xs">We typically reply in minutes</p>
                                </div>
                            </div>
                            <button
                                onClick={() => { setIsOpen(false); setHasInteracted(true); }}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-5 bg-slate-50">
                            <p className="text-slate-600 text-sm mb-4">
                                Hi there! 👋 <br />
                                Leave your details and we'll get back to you shortly.
                            </p>

                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 text-slate-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-slate-400" size={16} />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 text-slate-400" size={16} />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                                    />
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 mt-2">
                                    <span>Send Message</span>
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { setIsOpen(!isOpen); setHasInteracted(true); }}
                className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 transition-colors z-50"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
