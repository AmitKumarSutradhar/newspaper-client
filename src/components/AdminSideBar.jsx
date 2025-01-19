import { Link, NavLink } from "react-router";


const AdminSideBar = () => {
    return (
        <>
            <ul>
                <li><NavLink>All users</NavLink></li>
                <li><NavLink>All Articles</NavLink></li>
                <li><NavLink>Add Publisher</NavLink></li>
            </ul>
        </>
    );
};

export default AdminSideBar;