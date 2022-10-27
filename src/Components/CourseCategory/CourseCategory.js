import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({category}) => {
    const {title,id} = category;
   
    return (
        <div>
            <div className='p-5 text-center fw-bold rounded-full m-3 bg-red-600 text-white '>
                <Link to={`/course-categories/${id}`}><p> {title}</p></Link>
            
            </div>
        </div>
    );
};

export default CourseCategory;