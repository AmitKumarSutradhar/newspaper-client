import { Link } from "react-router";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-full">
            <div className="">
                <h2 className="text-7xl font-bold text-center mb-5">404</h2>
                <Link to={"/"}><button className="btn">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;