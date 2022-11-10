import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PreloaderContext } from '../../contexts/PreloaderProvider/PreloaderProvider';
import useTitle from '../../hooks/useTitle';
import Partner from '../Shared/Partner/Partner';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import TitleBanner from '../Shared/TitleBanner/TitleBanner';

const Services = () => {
    useTitle('Service');
    const { setPreloader } = useContext(PreloaderContext);

    // preloader false
    useEffect(() => setPreloader(false));

    const services = useLoaderData();


    return (
        <>

            <TitleBanner title='Services'></TitleBanner>
            <section className='services py-5' style={{ backgroundColor: '#F2F2F2' }}>
                <div className="container py-lg-5">
                    <div className="row gy-4">
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>
                </div>
            </section>
            <Partner></Partner>
        </>
    );
};

export default Services;