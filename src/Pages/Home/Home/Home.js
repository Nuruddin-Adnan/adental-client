import React from 'react';
import useTiele from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useTiele('Home')
    return (
        <main>
            <Banner></Banner>
            <Services></Services>
        </main>
    );
};

export default Home;