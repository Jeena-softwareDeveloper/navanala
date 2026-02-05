import React from 'react';
import Industries from '../components/Industries';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const IndustriesPage = () => {
    return (
        <PageTransition>
            <PageHeader title="Industries" subtitle="Tailored solutions for every sector." />
            <Industries />
            <CTASection />
        </PageTransition>
    );
};

export default IndustriesPage;
