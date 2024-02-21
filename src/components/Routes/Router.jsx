import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import ErrorPage from '../../Page/ErrorPage/ErrorPage';
import Home from '../../Page/Home/Home/Home';
import AddProduct from '../../Page/AddProduct/AddProduct';
import MyCart from '../../Page/MyCart/MyCart';
import Login from '../../Page/Login/Login';
import SingUp from '../../Page/SignUp/SingUp';

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
                element: <AddProduct></AddProduct>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
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




        ]
    },
]);

export default router;