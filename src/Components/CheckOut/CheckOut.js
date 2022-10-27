import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const {title, picture,details}=course
    return (
        <div className='bg-yellow-300 py-24'>
            <div className="max-w-xs p-6 text-white bg-purple-500 mx-auto  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                   
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                <p className="dark:text-gray-100">{details.slice(0, 60) + "..."}</p>
            </div>
        </div>
    );
};

export default CheckOut;