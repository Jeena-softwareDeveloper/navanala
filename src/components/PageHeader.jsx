import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => (
    <div className="pt-32 pb-12 text-center bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-slate-900 mb-4"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
                {subtitle}
            </motion.p>
        </div>
    </div>
);

export default PageHeader;
