import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then((data) => { setBlogs(data); })
    }, []);

    const handleCart = p => {
        // console.log(p);
        const isExist = cart.find((pd) => pd.id == p.id);
        if (!isExist) {
            setCart([...cart, p]);
        }
        else {
            alert('Already in cart');
        }
    };
    console.log(cart);

    return (
        <div className="container mx-auto md:flex gap-6  lg:mt-10">
            <div className=" grid lg:grid-cols-2 gap-5">

                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleCart={handleCart}
                    ></Blog>)
                }
            </div>
            <div className=" md:w-1/3 border-2 rounded-2xl">
                <div>
                    <h2 className=" text-2xl font-semibold text-center mt-8 border-b-2 mx-6 pb-4">Want to cook: </h2>
                    <div className=" flex justify-around text-[#878787] mt-4 ">
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                </div>
                <div>
                <h2 className=" text-2xl font-semibold text-center mt-8 border-b-2 mx-6 pb-4">Currently cooking: </h2>
                <div className=" flex justify-around text-[#878787] mt-4 ">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                </div>

            </div>
        </div>

    );
};

export default Blogs;