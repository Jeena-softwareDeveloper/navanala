import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, ShoppingCart, BarChart, Smartphone } from 'lucide-react';

const products = [
    {
        icon: <Briefcase size={28} />,
        title: 'Navanala ERP',
        description: 'Complete enterprise resource planning to streamline your business operations and data.',
        tags: ['Finance', 'SCM'],
        color: 'text-blue-600 bg-blue-50',
        border: 'hover:border-blue-200'
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'HRMS Suite',
        description: 'Modern human resource management for hiring, payroll, and employee engagement.',
        tags: ['People', 'Payroll'],
        color: 'text-pink-600 bg-pink-50',
        border: 'hover:border-pink-200'
    },
    {
        icon: <ShoppingCart size={28} />,
        title: 'Inventory Hub',
        description: 'Smart inventory tracking and automated billing for retail and wholesale businesses.',
        tags: ['Stock', 'Billing'],
        color: 'text-orange-600 bg-orange-50',
        border: 'hover:border-orange-200'
    },
    {
        icon: <BarChart size={28} />,
        title: 'Finance & Books',
        description: 'Comprehensive accounting software compliant with global tax standards.',
        tags: ['Tax', 'Audit'],
        color: 'text-teal-600 bg-teal-50',
        border: 'hover:border-teal-200'
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Mobile Connect',
        description: 'Enable your workforce to operate from anywhere with our mobile-first ecosystem.',
        tags: ['Remote', 'App'],
        color: 'text-indigo-600 bg-indigo-50',
        border: 'hover:border-indigo-200'
    }
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-bold tracking-wider uppercase mb-3 block">Our Ecosystem</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">Powerful Software Suite</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Everything you need to run your business. Integrated, powerful, and designed for scalability.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white border border-slate-100 p-8 rounded-3xl shadow-lg shadow-slate-200/50 ${product.border} transition-all group relative overflow-hidden`}
                        >

                            <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {product.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed mb-6 font-medium">
                                {product.description}
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                {product.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-bold py-1 px-3 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
