import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css'

const Login = () => {
    return (
        <div className='bg-teal-300'>
            <div className="w-full max-w-xs mx-auto py-8">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Your email" />
                    </div>
                    <div class="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Type your Password" />

                    </div>
                    <div class="flex">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mx-auto" type="button">
                            Login
                        </button>
                    </div>
                    <div className='btn-item pt-5'>
                        <button className='bg-teal-400'><FaGoogle></FaGoogle><p>Login With Google</p></button>
                    </div>
                    <div className='btn-item pt-3'>
                        <button className='bg-red-300'><FaGithub></FaGithub><p>Login With Github</p></button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;