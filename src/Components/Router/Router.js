import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../Blog/Blog';
import CheckOut from '../CheckOut/CheckOut';
import Course from '../Course/Course';
import CourseDetails from '../CourseDetails/CourseDetails';
import Error from '../Error/Error';
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
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
             path:'/course',
             element:<Course></Course>,
             loader:() => fetch(`https://learning-it-server.vercel.app/course-categories`),
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
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
            },
            {
                path:'/course-categories/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params}) => fetch(`https://learning-it-server.vercel.app/course-categories/${params.id}`),
            },
            {
                path:'/checkOut/:id',
                element:<PrivateRout><CheckOut></CheckOut></PrivateRout>,
                loader:({params}) => fetch(`https://learning-it-server.vercel.app/course-categories/${params.id}`),
            },
           
        ]
    }
])