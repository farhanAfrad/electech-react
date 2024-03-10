import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Root from '../Root/Root';
import AddProduct from '../AddProduct/AddProduct';
import LogIn from '../LogIn/LogIn';
import MyCart from '../MyCart/MyCart';
import AllProduct from '../AllProduct/AllProduct';
import SignUp from '../SignUp/SignUp';
import BrandedProduct from '../BrandedProduct/BrandedProduct';
import ProductDetails from '../ProductDetails/ProductDetails';
import Update from '../UpdateProduct.jsx/Update';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addproduct',

                element:<PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path:'/allproduct',
                element:<AllProduct></AllProduct>
            },
            {
                path:'/mycart',
                element:<PrivateRoute>

                    <MyCart></MyCart>
                </PrivateRoute>,
                loader:() => fetch(`https://tech-server-phi.vercel.app/cart`)
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/products/:brand',
                element:<BrandedProduct></BrandedProduct>,
                loader:({params}) => fetch(`https://tech-server-phi.vercel.app/productsByBrand/${params.brand}`)
            },
            {
                path:'/product/:id',
                element:<PrivateRoute>

                    <ProductDetails></ProductDetails>,
                </PrivateRoute>,
                loader:({params})=>fetch(`https://tech-server-phi.vercel.app/products/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`https://tech-server-phi.vercel.app/products/${params.id}`)
            }
        ]
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    }
]) 

export default Routes;