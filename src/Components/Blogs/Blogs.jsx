import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [cook, setCook] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then((data) => { setBlogs(data); })
    }, []);

    const handleCart = (r) => {
        const isExist = cart.find(item => item.recipe_id == r.recipe_id);
        // console.log(isExist);
        if(!isExist){
            setCart([...cart, r]);
        }
        else
        {
            alert ('Exist');
        }
        
    };
    

    const handleDelete = (item1) => {
        const newCart = cart.filter(item => item.recipe_id != item1.recipe_id);
        setCart(newCart);
        setCook((prev) => [...prev, item1]);
    }
    console.log(cook);

    return (
        <div className="container mx-auto md:flex gap-6  lg:mt-10">
            <div className=" grid lg:grid-cols-2 gap-5">

                {
                    blogs.map(blog => <Blog
                        key={blog.recipe_id}
                        handleCart={handleCart}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className=" md:w-1/3 border-2 rounded-2xl">
                <div>
                    <h2 className=" text-2xl font-semibold text-center mt-8 border-b-2 mx-6 pb-4">Want to cook:{cart.length} </h2>
                    <div className=" flex justify-around text-[#878787] mt-4 ">
                        <p>Name</p>
                        <p className="ml-5">Time</p>
                        <p>Calories</p>
                        <p className=" w-4"></p>
                    </div>
                    <div className="  ">
                        {
                            cart.map((item, i) => (
                                <div key={item.recipe_id} className="px-3 flex gap-2 text-[#878787] mt-4 " >
                                    <p className=" font-semibold text-black">{i+1}</p>
                                    <p>{item.recipe_name}</p>
                                    <p>{item.preparing_time.slice(0,6)}</p>
                                    <p className=" ml-4">{item.calories}</p>
                                    <button onClick={() => handleDelete(item)} className="px-2 text-black rounded-full bg-[#0BE58A]">Preparing</button>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2 className=" text-2xl font-semibold text-center mt-8 border-b-2 mx-6 pb-4">Currently cooking:{cook.length} </h2>
                    <div className=" flex justify-around text-[#878787] mt-4 ">
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                    <div>
                    {
                            cook.map((item1, i) => (
                                <div key={item1.recipe_id} className="px-3 flex gap-5 text-[#878787] mt-4 " >
                                    <p className=" font-semibold text-black">{i+1}</p>
                                    <p>{item1.recipe_name}</p>
                                    <p>{item1.preparing_time.slice(0,6)}</p>
                                    <p className="">{item1.calories}</p>
                                    
                                </div>
                                
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Blogs;