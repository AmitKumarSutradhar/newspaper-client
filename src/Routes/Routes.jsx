import { Routes, Route } from "react-router";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import AddArticle from "../Pages/Article/AddArticle";
import Articles from "../Pages/Article/Articles";
import Subscription from "../Pages/Subscription/Subscription";
import MyArticles from "../Pages/Article/MyArticles";

const Router = () => {
    return (
        <Routes>


            <Route element={<MainLayout />}>
                <Route index element={<App></App>} />
                <Route path="/add-article" element={<AddArticle></AddArticle>} />
                <Route path="/articles" element={<Articles></Articles>} />
                <Route path="/articles" element={<Articles></Articles>} />
                <Route path="/subscription" element={<Subscription></Subscription>} />
                <Route path="/my-articles" element={<MyArticles></MyArticles>} />
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