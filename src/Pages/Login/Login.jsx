import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {



    const handleLogin = (event) => {
        event.preventDefault();
    } 

    return (
        <>
            <Helmet>
            <title>Login</title>
            </Helmet>

            <div className="card bg-base-100 w-1/2 mx-auto my-16 shrink-0 shadow-2xl">

                <form onSubmit={ handleLogin } className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Login;