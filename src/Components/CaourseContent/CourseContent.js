import React from 'react';
import { Link } from 'react-router-dom';

const CourseContent = ({course}) => {
    const { picture,trainer_Img,trainer_name, title,details, age,id } = course;
    return (
        <div className='bg-white rounded-lg'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={trainer_Img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{trainer_name}</Link>
                        <span className="text-xs dark:text-gray-400">{age} years</span>
                    </div>
                </div>
                <div>
                    <img style={{height:"200px"}} src={picture} alt="" className="object-cover rounded-lg w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">
                    {
                        details.length > 100 ?
                            <>{details.slice(0, 100) + '...'}  </>
                            :
                            details
                    }
                    </p>
                </div>
                <Link to={`/course-categories/${id}`}><button type="button" className="px-8 py-3 text-white bg-blue-700 w-32  font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">Details</button></Link>
                
                <Link to={`/checkOut/${id}`}><button type="button" className="px-8 py-3 text-white bg-pink-700 w-32  font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">CheckOut</button></Link>
                
            </div>

        </div>
    );
};

export default CourseContent;