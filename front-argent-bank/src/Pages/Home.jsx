import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navigation />
            <main>
                <Hero />
                <Feature />
            </main>
            <Footer />
        </>
    );
};

export default Home;