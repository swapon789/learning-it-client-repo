import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../Blog/Blog';
import Course from '../Course/Course';
import FAQ from '../FAQ/FAQ';

import Home from '../Home/Home';
import Login from '../Login/Login';
import PrivateRout from '../PrivateRout/PrivateRout';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Course></Course>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<PrivateRout><FAQ></FAQ></PrivateRout>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
           
        ]
    }
])