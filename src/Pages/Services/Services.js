import React from 'react';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import TitleBanner from '../Shared/TitleBanner/TitleBanner';

const Services = () => {
    return (
        <>

            <TitleBanner title='Our Services'></TitleBanner>
            <section className='services py-5' style={{ backgroundColor: '#F2F2F2' }}>
                <div className="container py-lg-5">
                    <div className="row gy-4">
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                        <ServiceCard></ServiceCard>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;