import React from 'react';

const SecondBanner = () => {
    return (
        <div className="hero min-h-80 mt-24" style={{ backgroundImage: 'url(https://i.ibb.co/wSyscwM/secondb.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Our Baby Toy Store.</h1>
                    <p className="mb-5">Welcome to our online baby toy store. We have a wide range of products and services to cater to all your furry friends' needs.</p>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;