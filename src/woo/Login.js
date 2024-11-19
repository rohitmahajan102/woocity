import React, { useState } from 'react';
import SideLogo from './SideLogo';
import { Link } from 'react-router-dom';

// Importing images for React (Assuming images are in the src/assets/images folder)
import googleIcon from './assets/images/google.svg';
import appleIcon from './assets/images/apple.svg';
import facebookIcon from './assets/images/facebook.svg';

function Login() {

    return (
        <section className="login-sec">
            {/* component for sidelogo of signup, login */}
            <SideLogo />

            <div className="form-area">
                <div className="form">
                    <a href="index.html" className="skip-btn">
                        Skip <i className="fas fa-chevron-right"></i>
                    </a>
                    <h2>Login</h2>
                    <div className="login-with">
                        <a href="#" className="login-btns">
                            <img src={googleIcon} alt="google" /> Continue with Google
                        </a>
                        <a href="#" className="login-btns">
                            <img src={appleIcon} alt="apple" /> Continue with Apple
                        </a>
                        <a href="#" className="login-btns">
                            <img src={facebookIcon} alt="facebook" /> Continue with Facebook
                        </a>
                    </div>
                    <form>
                        <div className="form-group">
                            <label className="label-text">
                                Email <span>*</span>
                            </label>
                            <input
                                type="email"
                                name="Email"
                                placeholder="Enter Email Address"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="label-text">
                                Password <span>*</span>
                            </label>
                            <div className="password">
                                <input
                                    type="password"
                                    name="Password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                />
                                <button className="show-password" type="button">
                                    <i className="fa-regular fa-eye"></i>
                                </button>
                                <button
                                    className="hide-password"
                                    type="button"
                                    style={{ display: 'none' }}
                                >
                                    <i className="fa-regular fa-eye-slash"></i>
                                </button>
                            </div>
                            <a
                                href="#"
                                className="forgot-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#passwordModal"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div className="form-group remember">
                            <input type="checkbox" />
                            <label>Remember me</label>
                        </div>
                        <button type="submit" className="form-btn">
                            Login
                        </button>
                    </form>
                    <p className="acc-link">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="form-link">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Change Password Modal */}
            <div
                className="modal fade password-modal"
                id="passwordModal"
                tabIndex="-1"
                aria-labelledby="passwordModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5 className="modal-title" id="filterModalLabel">
                                Forgot Password
                            </h5>
                            <form>
                                <div className="form-group">
                                    <label>
                                        Email <span>*</span>
                                    </label>
                                    <input type="email" name="email" className="form-control" />
                                </div>
                                <button type="button" className="form-btn primary-btn">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;