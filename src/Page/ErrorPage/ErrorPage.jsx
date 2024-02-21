import React from 'react';
import notFound from '../../assets/toy/notFound.jpg'
const ErrorPage = () => {
    return (
        <div className='mx-auto h-1/2 w-1/2 mt-12'>
            <h2 className='my-8 text-red-600 text-5xl'> The Page is not found!! <br /> Please try again.</h2>
            <img className='w-96 h-96' src={notFound} alt="" />
        </div>
    );
};

export default ErrorPage;