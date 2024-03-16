

const Banner = () => {
    return (
        <div className='container mx-auto lg:mb-16 lg:mt-10'>
            <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/mvM1nFD/Rectangle-1-1.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-2xl lg:text-6xl text-white font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">In this tailored class, a renowned chef guides you through a culinary journey personalized to your tastes and preferences. <br />From farm-to-table organic cuisine to exotic global flavors, every dish reflects your unique palate.</p>
                        <div className=' space-x-4'>
                            <button className="btn rounded-full bg-[#0BE58A] lg:px-6">Explore Now</button>
                            <button className="border-2 py-2 rounded-full bg-none lg:px-6 px-2">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;