import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { value: '0', label: 'Setup Fees', color: 'text-blue-600' },
        { value: '100%', label: 'Founder-Led Support', color: 'text-purple-600' },
        { value: 'Weekly', label: 'Feature Updates', color: 'text-green-600' },
        { value: 'Open', label: 'Beta Access', color: 'text-orange-600' },
    ];

    return (
        <section className="py-16 bg-white relative border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-all"
                        >
                            <h3 className={`text-4xl md:text-5xl font-extrabold mb-2 ${stat.color}`}>
                                {stat.value}
                            </h3>
                            <p className="text-slate-500 font-bold tracking-wide uppercase text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
