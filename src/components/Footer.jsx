import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                N
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Navanala
                            </span>
                        </a>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Engineering the digital fabric of tomorrow. We provide end-to-end software solutions for modern enterprises to scale without limits.
                        </p>
                        <div className="flex space-x-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Partners', 'Newsroom', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            {['ERP Systems', 'CRM Suite', 'HR & Payroll', 'Supply Chain', 'Business Intelligence'].map((item) => (
                                <li key={item}><a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-400 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <span className="mt-2">12/34, Erode Road, Perundurai,<br />Erode District, TN 638052</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Phone size={20} />
                                </div>
                                <span>+91 987 654 3210</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span>info@navanala.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">&copy; 2026 Navanala Software Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
