import React, { useContext, useEffect } from 'react';
import { PreloaderContext } from '../../../contexts/PreloaderProvider/PreloaderProvider';
import useTitle from '../../../hooks/useTitle';
import Partner from '../../Shared/Partner/Partner';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    const { setPreloader } = useContext(PreloaderContext);

    // preloader false
    useEffect(() => setPreloader(false));

    return (
        <main>
            <Banner></Banner>
            <Services></Services>
            <Partner></Partner>
            <div className="container">
                <hr />
            </div>
            <About></About>
        </main>
    );
};

export default Home;