import { NavLink } from "react-router";


const NavBar = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={"/add-article"}>Add Articles</NavLink></li>
        <li><NavLink to={"/articles"}>All Articles</NavLink></li>
        <li><NavLink to={"/subscription"}>Subscription</NavLink></li>
        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        <li><NavLink to={"/my-articles"}>My Articles</NavLink></li>
        <li><NavLink to={"/premium-articles"}>Premium Articles</NavLink></li>
    </>

    const user = false;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <NavLink to={"/login"}  className="btn">Logout</NavLink>
                            <div className="">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                        </>
                        :
                        <>
                            <NavLink to={"/login"} className="btn">Login</NavLink>
                            <NavLink to={"/register"}  className="btn">Register</NavLink>
                        </>
                }


            </div>
        </div>
    );
};

export default NavBar;