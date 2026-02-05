import React from 'react';
import { motion } from 'framer-motion';
import { Database, Activity, Truck, Users, BarChart3, Cloud, Lock, Smartphone } from 'lucide-react';

const products = [
    {
        icon: <Database size={28} />,
        title: 'TexSuite ERP',
        description: 'The ultimate enterprise backbone for textile conglomerates. Manage multi-unit operations from fiber to fashion in one unified dashboard.',
        tags: ['Spinning', 'Weaving', 'Garmenting'],
        color: 'text-blue-600 bg-blue-50',
        border: 'hover:border-blue-200'
    },
    {
        icon: <Activity size={28} />,
        title: 'SpinMaster Pro',
        description: 'Specialized production tracking for spinning mills. Monitor spindle efficiency, yarn quality, and waste percentage in real-time.',
        tags: ['Production', 'Maintenance'],
        color: 'text-teal-600 bg-teal-50',
        border: 'hover:border-teal-200'
    },
    {
        icon: <Truck size={28} />,
        title: 'LoomTrack',
        description: 'IoT-enabled monitoring for weaving units. Track beam run-outs, loom stoppages, and efficiency automatically.',
        tags: ['IoT', 'Weaving'],
        color: 'text-indigo-600 bg-indigo-50',
        border: 'hover:border-indigo-200'
    },
    {
        icon: <Users size={28} />,
        title: 'Navanala HRMS',
        description: 'Complete workforce management handling piece-rate wages, overtime, and biometric attendance for large factory setups.',
        tags: ['Payroll', 'Attendance'],
        color: 'text-purple-600 bg-purple-50',
        border: 'hover:border-purple-200'
    },
    {
        icon: <BarChart3 size={28} />,
        title: 'FinBooks Pro',
        description: 'GST-ready accounting software integrated with inventory and sales, designed specifically for Indian manufacturers.',
        tags: ['Accounting', 'GST'],
        color: 'text-emerald-600 bg-emerald-50',
        border: 'hover:border-emerald-200'
    },
    {
        icon: <Smartphone size={28} />,
        title: 'MerchMobile',
        description: 'A mobile CRM for field sales and merchandisers to track samples, orders, and client approvals on the go.',
        tags: ['Sales', 'CRM'],
        color: 'text-orange-600 bg-orange-50',
        border: 'hover:border-orange-200'
    }
];

const Products = () => {
    return (
        <section className="py-20 bg-white" id="products">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Suite</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">
                            Enterprise-Grade <span className="text-blue-600">Software Suite</span>
                        </h2>
                        <p className="text-slate-600 text-lg mt-4">
                            Powerful, scalable, and secure applications designed to digitize every aspect of your manufacturing business.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        View Full Catalog <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${product.border} border-l-4 border-l-transparent hover:border-l-current`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${product.color}`}>
                                    {product.icon}
                                </div>
                                <div className="flex gap-2">
                                    {product.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 rounded-md bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wide border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {product.description}
                            </p>

                            <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                                Learn more <ArrowRight size={16} className="ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        View Full Catalog <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

// Import necessary specifically for this component as it's used
import { ArrowRight } from 'lucide-react';

export default Products;
