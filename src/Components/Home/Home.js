import React from 'react';


const Home = () => {
    return (
        <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("https://elearningindustry.com/wp-content/uploads/2019/12/why-elearning-is-the-future-of-corporate-training.jpg")`, backgroundRepeat:"no-repeat" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold ">Learning New <br /> Technology</h1>
                    <p className="mb-5">Now the time is introduce new coming technology.Because the technology used a men can change the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;