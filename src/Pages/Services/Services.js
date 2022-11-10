import { useContext, useEffect, useState } from 'react';
import { PreloaderContext } from '../../contexts/PreloaderProvider/PreloaderProvider';
import useTitle from '../../hooks/useTitle';
import Partner from '../Shared/Partner/Partner';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import TitleBanner from '../Shared/TitleBanner/TitleBanner';

const Services = () => {
    useTitle('Service');
    const [services, setServices] = useState([]);
    const { setPreloader } = useContext(PreloaderContext);

    useEffect(() => {
        setPreloader(true)
        fetch(`https://adental-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setPreloader(false)
            })
    }, [])



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