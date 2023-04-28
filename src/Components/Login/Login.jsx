/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="w-1/3 mx-auto mt-10">
        <p className="text-4xl text-center font-bold">LogIn</p>
        <div className="mt-12 border p-10 rounded-xl ">
          <Form>
            <div className="flex flex-col gap-8">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered input-info w-96 "
              />
              <input
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered input-info w-96 "
              />
            </div>
            <p className="mt-2 hover:bg-slate-700 inline-block p-3 underline rounded-xl">
              <Link>Forgot Password?</Link>
            </p>
            <section className="text-center mt-8">
              <button className=" btn btn-info px-10">LogIn</button>
            </section>
            <div className="mt-5">
              <hr className="w-96 mx-auto" />
            </div>
            <div className="mt-8 text-center">
              New at OurHotel?
              <Link to="/signUp" className="p-4 hover:bg-slate-700 rounded-xl underline font-bold">
                Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
};

export default Login;