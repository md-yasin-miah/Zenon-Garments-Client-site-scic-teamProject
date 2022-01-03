import React from 'react';
import useFirebase from './../Hooks/useFirebase';
import { Link } from 'react-router-dom';
const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href=" ">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/contact_us">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/all_career_info">Career</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/about_us">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    {
                        user?.email ?
                            <button onClick={logOut}>Log Out</button> :
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;