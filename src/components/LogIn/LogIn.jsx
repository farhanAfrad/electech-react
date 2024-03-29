import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';


const LogIn = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userCred = {email, password}
        console.log(userCred);
        logIn(email,password)
        .then(result =>{
            if(result.user){
                Swal.fire({
                    title: "Congrats!",
                    text:"logIn successful",
                    icon: "success"
                  });
            }
            navigate(location?.state? location.state : '/')
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className="">don't have an account?  
                            <Link to='/signup' className='underline'>signup</Link>
                            </p>
                            
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;