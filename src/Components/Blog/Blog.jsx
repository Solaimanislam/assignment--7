
import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { ImPower } from "react-icons/im";

const Blog = ({ blog, handleCart }) => {
    // console.log(handleCart);
    // console.log(blog);
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = blog;
    return (
        <div>

            <div className="card border-2 w-96 bg-base-100 shadow-xl">
                <figure className=' rounded-2xl'><img className='p-4' src= {recipe_image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name} </h2>
                    <p className=' text-[#878787] border-b-2 pb-4'>{short_description}</p>

                    <h6 className=' text-lg font-medium mt-3 border-b-2 pb-4'>Ingredients: {ingredients.length}</h6>
                    <div className=' flex gap-6 my-4 items-center'>
                        <div className=' flex gap-2 items-center'>
                            <a href=""><IoMdTime></IoMdTime> </a>
                            <p>{preparing_time} </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <a href=""><ImPower></ImPower></a>
                            <p>{calories}</p>
                        </div>
                    </div>
                    
                    <div className="card-actions ">
                        <button onClick={() => handleCart(blog)} className="btn rounded-full bg-[#0BE58A] px-6">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}

export default Blog;