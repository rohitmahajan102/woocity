import { Link } from "react-router-dom";
import SideLogo from "./SideLogo";
import React, { useState } from 'react';

function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <section class="login-sec">

            <SideLogo />

            <div className="form-area">
                <div className="form">
                    <a href="index.html" className="skip-btn">
                        Back <i className="fas fa-chevron-right"></i>
                    </a>
                    <h2>Sign Up</h2>
                    <form>
                        <div className="form-group">
                            <label className="label-text">
                                Name <span>*</span>
                            </label>
                            <input type="text" name="Name" placeholder="Your Full Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="label-text">
                                Email Address <span>*</span>
                            </label>
                            <input type="email" name="Email" placeholder="Enter Email Address" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="label-text">
                                Password <span>*</span>
                            </label>
                            <div className="password">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="Password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                />
                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={togglePasswordVisibility}
                                    style={{ display: showPassword ? 'none' : 'inline' }}
                                >
                                    <i className="fa-regular fa-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="hide-password"
                                    onClick={togglePasswordVisibility}
                                    style={{ display: showPassword ? 'inline' : 'none' }}
                                >
                                    <i className="fa-regular fa-eye-slash"></i>
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label-text">
                                Confirm Password <span>*</span>
                            </label>
                            <div className="password">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="Confirm-Pass"
                                    placeholder="Enter Confirm Password"
                                    className="form-control"
                                />
                                <button
                                    type="button"
                                    className="show-password"
                                    onClick={toggleConfirmPasswordVisibility}
                                    style={{ display: showConfirmPassword ? 'none' : 'inline' }}
                                >
                                    <i className="fa-regular fa-eye"></i>
                                </button>
                                <button
                                    type="button"
                                    className="hide-password"
                                    onClick={toggleConfirmPasswordVisibility}
                                    style={{ display: showConfirmPassword ? 'inline' : 'none' }}
                                >
                                    <i className="fa-regular fa-eye-slash"></i>
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="form-btn">
                            Submit
                        </button>
                    </form>
                    <p className="acc-link">
                        Already have an account? <Link to={'/'} className="form-link">Login</Link>
                    </p>
                </div>
            </div>

        </section>
    );
}

export default Signup;