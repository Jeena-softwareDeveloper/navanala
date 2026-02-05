import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import VisionMission from '../components/VisionMission';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Products from '../components/Products';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';

const Home = () => {
    return (
        <PageTransition>
            <div className="flex flex-col">
                <Hero />
                <Stats />
                <VisionMission />
                <Industries />
                <WhyChooseUs />
                <Products />
                <CTASection />
            </div>
        </PageTransition>
    );
};

export default Home;
