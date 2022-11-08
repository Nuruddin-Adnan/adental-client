import React from 'react';
import dentist from '../../../assets/images/dentist-png.png'
import signature from '../../../assets/images//signature.png'

const About = () => {
    return (
        <section className='about pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5">
                        <h2 className='fw-bold mb-3'>ABOUT <span className='text-info'>ADENTAL</span></h2>
                        <h5 className='mb-4'>A better life starts with a beautiful smile.</h5>
                        <p className='mb-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                            <br /><br />
                            Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
                        <img src={signature} alt="signature" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={dentist} alt="destist" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;