import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { photo, name, price, description, rating, _id } = product;
    // console.log(product);
    return (
        <div className="card card-compact bg-base-100 shadow-xl w-4/5 mx-auto">
            <figure><img src={photo} alt="Shoes" className='h-64 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                <h3 className='text-xl font-semibold'>Rating : {rating}</h3>
                <p className='text-lg'>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/productDetails/${_id}`}>
                        <button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;