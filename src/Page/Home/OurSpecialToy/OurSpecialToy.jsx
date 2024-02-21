import React from 'react';
import toy1 from '../../../assets/toy/toy1.jpg';
import toy2 from '../../../assets/toy/toy2.jpg';
import toy3 from '../../../assets/toy/toy3.jpg';
import toy4 from '../../../assets/toy/toy4.jpg';
import toy5 from '../../../assets/toy/toy5.jpg';
import toy6 from '../../../assets/toy/toy6.jpg';

const OurSpecialToy = () => {
    return (
        <div className='mt-24'>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Our Special Toys</h3>

            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4'>
                <div>
                    <img src={toy1} alt="" />
                </div>
                <div>
                    <img src={toy2} alt="" />
                </div>
                <div>
                    <img src={toy3} alt="" />
                </div>
                <div>
                    <img src={toy4} alt="" />
                </div>
                <div>
                    <img src={toy5} alt="" />
                </div>
                <div>
                    <img src={toy6} alt="" />
                </div>
            </div>

        </div>
    );
};

export default OurSpecialToy;