import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Contact, FAQ } from './HomePage';

function ContactPage() {
    return (
        <div style={{background: "white"}}>
            <Nav />
            <Contact />
            <FAQ />
            <Footer />
        </div>
    );
}

export default ContactPage;