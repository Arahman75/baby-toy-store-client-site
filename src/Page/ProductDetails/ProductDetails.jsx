import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, name, price, description, rating, photo } = product;
    // console.log(product)
    return (
        <div className="card card-compact bg-base-100 shadow-xl w-4/5 mx-auto">
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Our Products Details</h3>

            </div>
            <figure><img src={photo} alt="Shoes" className='h-64 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Name:{name}</h2>
                <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                <h3 className='text-xl font-semibold'>Rating : ${rating}</h3>
                <p className='text-lg'>{description}</p>
                <div className="card-actions justify-end">
                    <Link to='/myCart'>
                        <button className="btn btn-primary">Add to Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;