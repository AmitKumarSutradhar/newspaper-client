import { FaUserFriends } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineDashboardCustomize, MdOutlinePostAdd } from "react-icons/md";
import { Link, NavLink } from "react-router";


const AdminSideBar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white overflow-y-auto fixed">
            <ul>
                <li><NavLink to="/dashboard" className="btn w-full mb-3 justify-start" ><MdOutlineDashboardCustomize /> Dashboard</NavLink></li>
                <li><NavLink to="/dashboard/users" className="btn w-full mb-3 justify-start" ><FaUserFriends></FaUserFriends> All users</NavLink></li>
                <li><NavLink to="/dashboard/articles" className="btn w-full mb-3 justify-start" ><MdOutlinePostAdd></MdOutlinePostAdd> All Articles</NavLink></li>
                <li><NavLink to="/dashboard/add-publishers" className="btn w-full mb-3 justify-start" ><FaUserPen></FaUserPen> Add Publisher</NavLink></li>
            </ul>
        </aside>
    );
};

export default AdminSideBar;