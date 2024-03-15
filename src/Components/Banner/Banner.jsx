

const Banner = () => {
    return (
        <div className='container mx-auto lg: my-16'>
            <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/mvM1nFD/Rectangle-1-1.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-6xl text-white font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                        <div className=' space-x-4'>
                            <button className="btn rounded-full bg-[#0BE58A] px-6">Explore Now</button>
                            <button className="border-2 py-2 rounded-full bg-none px-6">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;