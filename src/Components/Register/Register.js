import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState("");

    const { creatUser, updateUserProfile, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("Register Successfull")
                setError('');
                form.reset();
                if (user) {
                    navigate(from, { replace: true });
                }
                handleUpdateUserProfile(name, photoURL);
                
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,

            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
   

    return (
        <div className='py-3 bg-black'>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 bg-gray-300">
                <h1 className="text-2xl font-bold text-center">Register Form</h1>
                <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-400">Username</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block dark:text-gray-400">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURl" placeholder="Enter Your PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <p className='text-red-500'>
                        {error}
                    </p>
                    <button className="block w-full p-3 text-center text-white rounded-sm dark:text-gray-900 dark:bg-violet-400 bg-blue-500">Register</button>
                    <p className="px-3 text-sm text-black flex justify-end dark:text-gray-400"> <Link to='/login' className='text-red-800 underline'>Login form</Link> </p>

                </form>
                
            </div>
        </div>
    );
};

export default Register;