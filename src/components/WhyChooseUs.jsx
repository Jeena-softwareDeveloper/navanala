import React from 'react';
import { CheckCircle2, Zap, Headphones, BarChart4 } from 'lucide-react';

const benefits = [
    {
        icon: <Zap size={24} />,
        title: "Lightning Fast Implementation",
        desc: "Go live in days, not months. Our modular architecture allows specific modules to be deployed immediately while others follow."
    },
    {
        icon: <CheckCircle2 size={24} />,
        title: "Zero CapEx Model",
        desc: "No expensive servers or hardware required. Pay a simple subscription fee and let our cloud infrastructure handle the heavy lifting."
    },
    {
        icon: <Headphones size={24} />,
        title: "24/7 Mill Support",
        desc: "We understand shift timings. Our support team is active round-the-clock to resolve production-critical issues instantly."
    },
    {
        icon: <BarChart4 size={24} />,
        title: "Real-time ROI",
        desc: "See immediate cost savings through waste reduction, accurate inventory tracking, and optimized labor planning."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">The Navanala Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">
                        Why Leading Mills <span className="text-blue-600">Trust Us</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Software shouldn't be a bottleneck. It should be your biggest competitive advantage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 border border-slate-100">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
