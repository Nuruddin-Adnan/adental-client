import React from 'react';
import './Partner.css'
import partner1 from '../../../assets/images/partner/partner1.jpg';
import partner2 from '../../../assets/images/partner/partner2.jpg';
import partner3 from '../../../assets/images/partner/partner3.jpg';
import partner4 from '../../../assets/images/partner/partner4.jpg';
import partner5 from '../../../assets/images/partner/partner5.jpg';
import favicon from '../../../assets/images/favicon.png';

const Partner = () => {
    return (
        <section className='our-partner py-5'>
            <div className="container text-center py-5">
                <img src={favicon} alt="dental teeth" className='img-fuid' />
                <h2 className='fw-bold my-2'>MY <span className='text-info'>PARTNERS</span></h2>
                <h5 className=''>Out Partners believe us and life starts with a beautiful smile.</h5>
                <p className='mb-4 col-md-6 mx-auto lead'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                </p>
                <div className="row g-lg-5">
                    <div className="col">
                        <div className="partner-box">
                            <img src={partner1} alt="partner" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="partner-box">
                            <img src={partner2} alt="partner" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col">
                        <div className="partner-box">
                            <img src={partner3} alt="partner" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col d-lg-block d-none">
                        <div className="partner-box">
                            <img src={partner4} alt="partner" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col d-lg-block d-none">
                        <div className="partner-box">
                            <img src={partner5} alt="partner" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;