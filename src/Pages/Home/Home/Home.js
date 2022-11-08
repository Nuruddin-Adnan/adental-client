import React from 'react';
import useTiele from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    useTiele('Home')
    return (
        <main>
            <Banner></Banner>
        </main>
    );
};

export default Home;