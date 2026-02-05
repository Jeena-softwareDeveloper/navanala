import React from 'react';
import Products from '../components/Products';
import CTASection from '../components/CTASection';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const ProductsPage = () => {
    return (
        <PageTransition>
            <PageHeader title="Our Products" subtitle="Explore our suite of next-generation business tools." />
            <Products />
            <CTASection />
        </PageTransition>
    );
};

export default ProductsPage;
