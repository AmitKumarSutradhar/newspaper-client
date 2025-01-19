import { Outlet } from "react-router";
import AdminSideBar from "../components/AdminSideBar";


const AdminDashboardLayout = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-1/4 bg-red-600">
                    <AdminSideBar></AdminSideBar>
                </div>
                <div className="w-3/4 bg-stone-950">
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default AdminDashboardLayout;