import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-purple-400">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 bg-indigo-400">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center pb-3 text-black">InterView Questions</h2>                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Waht is cors?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

                                The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firbase? What other options do you implement authentication?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;