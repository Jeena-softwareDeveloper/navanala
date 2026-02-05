import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => (
    <section className="py-24 relative overflow-hidden bg-slate-50">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <div className="inline-block p-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">Limited Slots</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
                Don't settle for legacy software. <br />
                <span className="text-blue-600">Build with Navanala.</span>
            </h2>

            <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                We are accepting a limited number of pilot partners for our Q1 2026 cohort.
                Secure your spot and get grandfathered pricing for life.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 w-full px-4 h-14 bg-slate-50 rounded-xl border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                    <Mail className="text-slate-400" size={20} />
                    <input
                        type="email"
                        placeholder="Enter your work email"
                        className="bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 w-full h-full font-medium"
                    />
                </div>
                <button className="w-full sm:w-auto px-8 h-14 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap">
                    Join Waitlist <ArrowRight size={18} />
                </button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
                No credit card required. Unsubscribe at any time.
            </p>
        </div>
    </section>
);

export default CTASection;
