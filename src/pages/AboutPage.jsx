import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import TopPage from '../components/TopPage';

function AboutPage() {
    return (
        <div>
            <Nav />
            <TopPage headerText="About us" />
            <Footer />
        </div>
    );
}

export default AboutPage;