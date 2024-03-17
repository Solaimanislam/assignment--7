import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { toast } from "react-toastify";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [cook, setCook] = useState([]);
    const [cookingTime, setCookingTime] = useState(0);
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then((data) => { setBlogs(data); })
    }, []);

    const handleCart = (r) => {
        const isExist = cart.find(item => item.recipe_id == r.recipe_id);

        if (!isExist) {
            setCart([...cart, r]);
        }
        else {
            toast('Already Exist', {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    };


    const handleDelete = (item1, time, c) => {
        const newCart = cart.filter(item => item.recipe_id != item1.recipe_id);
        setCart(newCart);
        setCook((prev) => [...prev, item1]);
        const newTime = cookingTime + time;
        const newCalories = calories + c;
        setCookingTime(newTime);
        setCalories(newCalories);
        
    }
    // console.log(cook);

    return (
        <div className="container mx-auto md:flex gap-6  lg:mt-10">
            <div className=" md:w-2/3 grid lg:grid-cols-2 grid-cols-1 lg:gap-5">

                {
                    blogs.map(blog => <Blog
                        key={blog.recipe_id}
                        handleCart={handleCart}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className=" md:w-1/3 border-2 rounded-2xl mb-10">
                <div>
                    <h2 className=" text-2xl font-semibold text-center mt-8 border-b-2 mx-6 pb-4">Want to cook:{cart.length} </h2>
                    <div className=" flex justify-around text-[#878787] mt-4 ">
                        <p>Name</p>
                        <p className="">Time</p>
                        <p>Calories</p>
                        <p className=" "></p>
                    </div>
                    
                    <div className=" ">
                        {
                            cart.map((item, i) => (
                                <div key={item.recipe_id} className=" px-3 flex items-center gap-2 text-[#878787] mt-4 bg-[#28282808] p-2 mx-2 ">
                                    <p className=" font-semibold text-black ">{i + 1}</p>
                                    <p className=" lg:basis-full  ">{item.recipe_name}</p>
                                    <p className="lg:basis-full   ">{item.preparing_time}minutes</p>
                                    <p className=" lg:basis-full ">{item.calories}calories</p>
                                    <button onClick={() => handleDelete(item, item.preparing_time, item.calories)} className="px-2 lg:my-0 lg:py-3 my-4 text-black rounded-full bg-[#0BE58A] basis-full ">Preparing</button>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2 className=" text-2xl font-semibold text-center lg:mt-8 mt-6 border-b-2 mx-6 pb-4">Currently cooking:{cook.length} </h2>
                    <div className=" flex justify-around text-[#878787] mt-4 ">
                        <p>Name</p>
                        <p className=" lg:ml-14">Time</p>
                        <p className=" lg:-ml-6">Calories</p>
                    </div>
                    <div className=" border-b-2 my-6 mx-6">
                        {
                            cook.map((item1, i) => (
                                <div key={item1.recipe_id} className="px-3 flex gap-5 text-[#878787] mt-4 bg-[#28282808] p-2 m-2 " >
                                    <p className=" font-semibold text-black lg:w-5">{i + 1}</p>
                                    <p className=" lg:w-36">{item1.recipe_name}</p>
                                    <p className=" lg:w-24">{item1.preparing_time}minutes</p>
                                    <p className=" lg:w-16">{item1.calories}calories</p>
                                    

                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className=" flex gap-2 justify-center ml-5 lg:ml-8">
                    <h2 className=" font-semibold lg:ml-16">Total Time = {cookingTime}minutes</h2>
                    <h2 className=" font-semibold">Total Calories = {calories}calories</h2>
                </div>

            </div>
        </div>

    );
};

export default Blogs;