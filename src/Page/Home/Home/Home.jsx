import React from 'react';
import Banner from '../Banner';
import Products from '../Products/Products';
import OurSpecialToy from '../OurSpecialToy/OurSpecialToy';
import SecondBanner from '../SecondBanner/SecondBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurSpecialToy></OurSpecialToy>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;