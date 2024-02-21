import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import ErrorPage from '../../Page/ErrorPage/ErrorPage';
import Home from '../../Page/Home/Home/Home';
import AddProduct from '../../Page/AddProduct/AddProduct';
import MyCart from '../../Page/MyCart/MyCart';
import Login from '../../Page/Login/Login';
import SingUp from '../../Page/SignUp/SingUp';
import PrivateRoute from './PriveteRoute';
import ProductDetails from '../../Page/ProductDetails/ProductDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addProduct',
                element:
                    <AddProduct></AddProduct>

            },
            {
                path: 'myCart',
                element: <PrivateRoute>

                    <MyCart></MyCart> </PrivateRoute>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://baby-toy-store-server-aphodko0x-abdur-rahmans-projects.vercel.app/products/${params.id}`)
            }




        ]
    },
]);

export default router;