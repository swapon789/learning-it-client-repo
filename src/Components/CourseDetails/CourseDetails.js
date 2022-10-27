import React from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';


const ref = React.createRef();


const CourseDetails = () => {
    const course = useLoaderData();
    const { title, picture, trainer_Img, trainer_name, age, details, trainer_email, phone } = course;
    return (
        <div className='bg-pink-300 py-4'>
            <div ref={ref} className="flex  text-white bg-blue-500 mx-auto flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={trainer_Img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{trainer_name}</Link>
                        <span className="text-xs dark:text-gray-400">{age} Years</span>
                    </div>
                </div>
                <div>
                    <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">{details}</p>
                </div>
                <div>
                    <h3>Contact:</h3>
                    <p>Trainer:{trainer_name}</p>
                    <p>Email:{trainer_email}</p>
                    <p>Mobile:{phone}</p>
                </div>
                <div className='flex justify-between'>
                    <Link to='/course'><button type="button" className="px-3 py-3  text-center text-white bg-green-500  mx-auto font-semibold rounded-lg dark:bg-gray-100 dark:text-gray-800">Back to Previous page</button></Link>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='px-3 py-3  text-white bg-red-600 rounded-lg'>Download PDF</button>}
                    </Pdf>
                </div>
            </div>


        </div>
    );
};

export default CourseDetails;