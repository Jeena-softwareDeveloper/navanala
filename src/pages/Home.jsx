import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Industries from '../components/Industries';
import Products from '../components/Products';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';

const Home = () => {
    return (
        <PageTransition>
            <div className="flex flex-col">
                <Hero />
                <Stats />
                <Industries />
                <Products />
                <CTASection />
            </div>
        </PageTransition>
    );
};

export default Home;
