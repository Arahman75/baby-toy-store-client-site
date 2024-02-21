import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://baby-toy-store-server-aphodko0x-abdur-rahmans-projects.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(console.log('hello developer', data))
            )
    }, [])
    return (
        <div className='mt-12'>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Our Products</h3>
                <p className='text-lg text-black font-semibold'>We are provide best toy <br /> service giving you complete</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    products.slice(0, 4).map(product => <ProductCart
                        product={product}
                        key={product._id}
                    ></ProductCart>)
                }
            </div>

        </div>
    );
};

export default Products;