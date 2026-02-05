import React from 'react';
import { Target, Flag, Users, Award } from 'lucide-react';

const AboutPage = () => {
    return (
        <div>
            {/* Hero Header */}
            <div className="bg-slate-900 pt-32 pb-24 text-center relative overflow-hidden">
                {/* Abstract BG */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Redefining Manufacturing Intelligence</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Navanala was born from a simple belief: The textile industry deserves world-class software that works as hard as the machines on the floor.
                    </p>
                </div>
            </div>

            {/* Our Story Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">From Perundurai to the World</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Founded in the heart of India's textile belt, Erode, we saw firsthand the challenges facing spinning mills and garment manufacturers. Legacy software was clunky, disconnected, and barely used.
                                </p>
                                <p>
                                    We set out to change that. We combined deep industry knowledge with cutting-edge cloud technology to build <strong>TexSuite</strong>, an ERP system that is intuitive, mobile-first, and powerful.
                                </p>
                                <p>
                                    Today, we are proud to partner with over 50+ mills and manufacturing units, helping them streamline operations and achieve record efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden relative shadow-2xl skew-y-3">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
                                {/* Placeholder for Office/Team Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                                    <span className="text-slate-400 font-bold text-2xl">Team Workspace</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Numbers */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '2020', label: 'Year Founded' },
                            { number: '50+', label: 'Enterprise Clients' },
                            { number: '1M+', label: 'Spindles Managed' },
                            { number: '15+', label: 'Team Members' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.number}</div>
                                <div className="text-blue-200 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">What Drives Us</h2>
                        <p className="text-slate-600">Our core values shape every line of code we write and every customer interaction we have.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Target size={32} />, title: 'Precision', desc: 'In manufacturing, every decimal point matters. our software is built for exactness.' },
                            { icon: <Users size={32} />, title: 'Customer Obsession', desc: 'We do not just sell software; we walk the floor with you until the problem is solved.' },
                            { icon: <Flag size={32} />, title: 'Innovation', desc: 'We bring the latest in AI and IoT to traditional manufacturing sectors.' }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-all">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
