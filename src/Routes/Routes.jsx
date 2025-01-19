import { Routes, Route } from "react-router";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import AddArticle from "../Pages/Article/AddArticle";
import Articles from "../Pages/Article/Articles";
import Subscription from "../Pages/Subscription/Subscription";
import MyArticles from "../Pages/Article/MyArticles";
import ArticleDetail from "../Pages/Article/ArticleDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
    return (
        <Routes>


            <Route element={<MainLayout />}>
                <Route index element={<App></App>} />
                <Route path="/add-article" element={<PrivateRoute><AddArticle></AddArticle></PrivateRoute>} />
                <Route path="/articles" element={<Articles></Articles>} />
                <Route path="/articles/:id" element={<PrivateRoute><ArticleDetail></ArticleDetail></PrivateRoute>} />
                <Route path="/subscription" element={<PrivateRoute><Subscription></Subscription></PrivateRoute>} />
                <Route path="/my-articles" element={<PrivateRoute><MyArticles></MyArticles></PrivateRoute>} />


                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
            </Route>

            {/* 
            <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route> */}

            {/* <Route path="concerts">
                <Route index element={<ConcertsHome />} />
                <Route path=":city" element={<City />} />
                <Route path="trending" element={<Trending />} />
            </Route> */}
        </Routes>
    );
};

export default Router;