import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import userImage from '../../images/user-group-296.png'

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="login-container">
            <div className="row">
                <div className="login-form">
                    <div class="col wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
                        <div className="col d-flex justify-content-center align-items-center mt-4">
                            <img className="user-icon p-1" src={userImage} alt="/" /> <h3 className="text-center pt-3 pl-3 text-dark">User Login</h3>
                        </div>

                        <form className="main-form justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control one-form" defaultValue="Fullname" {...register("Fullname", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="email" className="form-control one-form" defaultValue="email" {...register("email", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="password" className="form-control one-form" defaultValue="password" {...register("password", { required: true })} /><br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <br />
                            <input className="form-control w-25" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
            <div className="row icon-title-holder mt-5 text-center">
                <div className="col d-flex justify-content-center align-items-center ">
                    <div className="pr-4">
                        <img src="https://img.icons8.com/color/50/000000/google-logo.png" />
                    </div>
                    <div className="google-login pl-4">
                        <h5>Sign in With Google</h5>
                    </div>
                </div>

            </div>
            <div className="row icon-title-holder mt-2 text-center">
                <div className="col d-flex justify-content-center align-items-center ">
                    <div className="pr-4">
                        <img src="https://img.icons8.com/color/50/000000/facebook-circled--v4.png" />
                    </div>
                    <div className="google-login pl-4">
                        <h5>Sign in With FaceBook</h5>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Login;