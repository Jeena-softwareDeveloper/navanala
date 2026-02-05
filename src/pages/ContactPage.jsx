import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
    return (
        <div>
            {/* Header */}
            <div className="bg-slate-900 pt-32 pb-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a question about our textile ERP solutions? Ready to modernize your mill? We are here to help.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                            <p className="text-slate-500 mb-4 text-sm">Mon-Fri from 9am to 6pm IST.</p>
                            <a href="tel:+919876543210" className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                                +91 987 654 3210
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                            <p className="text-slate-500 mb-4 text-sm">For sales and general inquiries.</p>
                            <a href="mailto:info@navanala.com" className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                                info@navanala.com
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Visit HQ</h3>
                            <p className="text-slate-500 mb-4 text-sm">Come say hello at our office.</p>
                            <p className="text-lg font-semibold text-slate-800">
                                12/34, Erode Road,<br />Perundurai, TN 638052
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a message</h2>
                                <p className="text-slate-600">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company / Mill Name</label>
                                    <input type="text" id="company" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="Navanala Textiles Ltd" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
