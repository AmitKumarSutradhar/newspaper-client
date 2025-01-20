import { Link, NavLink } from "react-router";


const AdminSideBar = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/dashboard" className="btn w-full mb-3" >Dashboard</NavLink></li>
                <li><NavLink to="/dashboard/users" className="btn w-full mb-3" >All users</NavLink></li>
                <li><NavLink to="/dashboard/articles" className="btn w-full mb-3" >All Articles</NavLink></li>
                <li><NavLink to="/dashboard/add-publishers" className="btn w-full mb-3" >Add Publisher</NavLink></li>
            </ul>
        </>
    );
};

export default AdminSideBar;