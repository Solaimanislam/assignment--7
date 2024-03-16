
import profile from '../../assets/image/Frame 5 (1).png';
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
    return (
        <div className=" container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                            <div className=' border-2 flex  items-center rounded-full px-3 bg-gray-300' >
                                <a href=""><IoSearchOutline></IoSearchOutline></a>
                                <input className='w-12 p-3 outline-none bg-gray-300 rounded-full  ' type="text" name="" id="" placeholder='Search' />
                            </div>
                        </ul>

                    </div>
                    <a className="btn btn-ghost text-2xl lg:text-3xl lg:ml-0 -ml-4 font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[#150B2BB3] px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3 lg:flex-none flex">
                    <div className=' hidden border-2 lg:flex items-center rounded-full px-3 bg-gray-300' >
                        <a href=""><IoSearchOutline></IoSearchOutline></a>
                        <input className='p-3 outline-none bg-gray-300 rounded-full  ' type="text" name="" id="" placeholder='Search' />
                    </div>
                    <a><img src={profile} alt="" /></a>
                </div>
            </div>

        </div>
    );
};

export default Header;