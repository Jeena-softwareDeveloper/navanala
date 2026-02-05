import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Stethoscope, GraduationCap, ShoppingBag, Truck } from 'lucide-react';

const industries = [
    { icon: <Building2 className="w-8 h-8" />, name: 'Real Estate', desc: 'Property management & CRM solutions.', color: 'bg-blue-100 text-blue-600' },
    { icon: <Factory className="w-8 h-8" />, name: 'Manufacturing', desc: 'End-to-end supply chain & ERP systems.', color: 'bg-purple-100 text-purple-600' },
    { icon: <Stethoscope className="w-8 h-8" />, name: 'Healthcare', desc: 'Patient records & hospital management.', color: 'bg-green-100 text-green-600' },
    { icon: <GraduationCap className="w-8 h-8" />, name: 'Education', desc: 'LMS & student information systems.', color: 'bg-yellow-100 text-yellow-600' },
    { icon: <ShoppingBag className="w-8 h-8" />, name: 'Retail', desc: 'POS, Inventory & Omnichannel support.', color: 'bg-pink-100 text-pink-600' },
    { icon: <Truck className="w-8 h-8" />, name: 'Logistics', desc: 'Fleet tracking & route optimization.', color: 'bg-indigo-100 text-indigo-600' },
];

const Industries = () => {
    return (
        <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-200/30 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase mb-3 block">For Every Business</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Tailored for Your Industry</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Deep vertical expertise built into every product. We understand the unique challenges of your sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, width) => (
                        <motion.div
                            key={width}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: width * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-primary/20 transition-all cursor-pointer group"
                        >
                            <div className={`${industry.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                {industry.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{industry.name}</h3>
                            <p className="text-slate-500 leading-relaxed">{industry.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
