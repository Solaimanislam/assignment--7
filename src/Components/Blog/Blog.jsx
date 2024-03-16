
import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { ImPower } from "react-icons/im";

const Blog = ({ blog, handleCart }) => {
    
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = blog;
    return (
        <div>

            <div className="card border-2 bg-base-100 shadow-xl mb-5">
                <figure className=' rounded-2xl'><img className='p-4' src= {recipe_image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name} </h2>
                    <p className=' text-[#878787] border-b-2 pb-4'>{short_description}</p>

                    <h6 className=' text-lg font-medium mt-3 border-b-2 pb-4'>Ingredients: {ingredients.length}
                    </h6>
                    <ul className='lg:ml-6 ml-4 text-[#878787]' style={{listStyleType: 'disc'}}>
                        {
                            ingredients.slice(0, 5).map((item) => (
                                <li key={item.recipe_id}>{item}</li>
                            ))
                        }
                    </ul>
                    <div className=' flex lg:gap-6 gap-2 my-4 items-center text-[#878787]'>
                        <div className=' flex gap-2 items-center'>
                            <a href=""><IoMdTime></IoMdTime> </a>
                            <p>{preparing_time} minutes </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <a href=""><ImPower></ImPower></a>
                            <p>{calories}</p>
                        </div>
                    </div>
                    
                    <div className="card-actions ">
                        <button onClick={() => handleCart(blog)} className="btn rounded-full bg-[#0BE58A] px-6 ">Want to Cook</button>
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