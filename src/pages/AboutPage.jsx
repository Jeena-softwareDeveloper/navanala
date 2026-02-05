import React from 'react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const AboutPage = () => {
    return (
        <PageTransition>
            <PageHeader title="About Us" subtitle="Building the future of enterprise software." />
            <div className="container mx-auto px-6 py-12 text-center">
                <p className="text-xl text-slate-600">More information coming soon.</p>
            </div>
        </PageTransition>
    );
};

export default AboutPage;
