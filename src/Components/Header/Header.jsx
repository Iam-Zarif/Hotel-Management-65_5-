/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut =()=>{
   
logOut()
.then(()=>{})
.catch(error => console.log(error))
  }
  console.log(user);
  // console.log(user)
    return (
      <div>
        <div className="navbar bg-primary text-primary-content">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link className="justify-between">
                    Categories
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link>Single person</Link>
                    </li>
                    <li>
                      <Link>Couple</Link>
                    </li>
                    <li>
                      <Link>Family</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              Our <span className="text-3xl text-black font-bold">Hotel</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link>
                  Categories
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link>Single person</Link>
                  </li>
                  <li>
                    <Link>Couple</Link>
                  </li>
                  <li>
                    <Link>Family</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-5">
            {user ? (
              <div> {user.email}</div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Log In
                </Link>
              </div>
            )}
            {user ? (
              <div>
                <button onClick={handleLogOut} className="btn">Log Out</button>
              </div>
            ) : (
              <div>
                <Link to="/signUp" className="btn">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        <div>
          <p></p>
        </div>
      </div>
    );
};

export default Header;