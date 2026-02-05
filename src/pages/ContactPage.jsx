import React from 'react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const ContactPage = () => {
    return (
        <PageTransition>
            <PageHeader title="Contact Us" subtitle="We'd love to hear from you." />
            <div className="container mx-auto px-6 py-12 text-center">
                <p className="text-xl text-slate-600">Please use the chat widget to reach us instantly.</p>
            </div>
        </PageTransition>
    );
};

export default ContactPage;
