import React from 'react';
import useTiele from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useTiele('Home')
    return (
        <main>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </main>
    );
};

export default Home;