import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shirt, Scissors, Layers, Droplets, TrendingUp } from 'lucide-react';

const industries = [
    {
        icon: <Factory size={32} />,
        title: 'Spinning Mills',
        description: 'End-to-end bale management, yarn production tracking, and waste control monitoring tailored for modern spinning-mills.',
        features: ['Real-time Production Monitoring', 'Cotton Mix Optimization', 'Waste & Efficiency Analytics']
    },
    {
        icon: <Shirt size={32} />,
        title: 'Textile Manufacturing',
        description: 'Complete loom planning, weaving management, and fabric inventory control for weaving units.',
        features: ['Loom Shed Management', 'Beam Planning', 'Fabric Costing Engine']
    },
    {
        icon: <Scissors size={32} />,
        title: 'Garmenting & Apparel',
        description: 'Streamline cutting, stitching, and packing operations with order tracking from sample to shipment.',
        features: ['Cut Plan Order Automation', 'Line Balancing', 'Piece-rate Payroll']
    },
    {
        icon: <Droplets size={32} />,
        title: 'Dyeing & Processing',
        description: 'Manage recipes, batch tracking, and chemical inventory with precision for dyeing houses.',
        features: ['Recipe Management', 'Batch Job Card', 'Lab Dip Matching']
    },
    {
        icon: <Layers size={32} />,
        title: 'Fabric Printing',
        description: 'Digital and rotary printing management to handle designs, screens, and production planning.',
        features: ['Design Library', 'Screen Inventory', 'Production Scheduling']
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Trading & Export',
        description: 'Manage multi-currency exports, documentation, and supply chain logistics for merchant exporters.',
        features: ['Export Documentation', 'Multi-currency Accounting', 'Shipment Tracking']
    }
];

const Industries = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Targeted Solutions</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">
                        Engineered for the <span className="text-blue-600">Textile Value Chain</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We don't do generic. Our ERP solutions are deeply customized for the unique workflows of the textile and manufacturing industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {industry.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                {industry.description}
                            </p>

                            <div className="space-y-2 pt-4 border-t border-slate-100">
                                {industry.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
