import { Routes, Route } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddArticle from "../Pages/Article/AddArticle";
import Articles from "../Pages/Article/Articles";
import Subscription from "../Pages/Subscription/Subscription";
import MyArticles from "../Pages/Article/MyArticles";
import ArticleDetail from "../Pages/Article/ArticleDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllArticles from "../Pages/Dashboard/AllArticles/AllArticles";
import AddPublisher from "../Pages/Dashboard/AddPublisher/AddPublisher";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";

const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home></Home>} />
                <Route path="/add-article" element={<PrivateRoute><AddArticle></AddArticle></PrivateRoute>} />
                <Route path="/articles" element={<Articles></Articles>} />
                <Route path="/articles/:id" element={<PrivateRoute><ArticleDetail></ArticleDetail></PrivateRoute>} />
                <Route path="/subscription" element={<PrivateRoute><Subscription></Subscription></PrivateRoute>} />
                <Route path="/my-articles" element={<PrivateRoute><MyArticles></MyArticles></PrivateRoute>} />


                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
            </Route>

            <Route path="dashboard" element={<AdminDashboardLayout></AdminDashboardLayout>}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<AllUsers></AllUsers>} />
                <Route path="articles" element={<AllArticles></AllArticles>} />
                <Route path="add-publishers" element={<AddPublisher></AddPublisher>} />
            </Route>

            <Route path='*' element={<ErrorPage></ErrorPage>} />
        </Routes>
    );
};

export default Router;