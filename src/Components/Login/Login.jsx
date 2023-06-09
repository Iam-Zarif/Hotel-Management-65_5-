/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset();
      alert("Good Job Yaaaaaaaaaayyyyyyyyyy")
    })
    .catch(error=>
      
      console.log(error))
      

  }
    return (
      <div className="w-1/3 mx-auto mt-10">
        <p className="text-4xl text-center font-bold">LogIn</p>
        <div className="mt-12 border p-10 rounded-xl ">
          <Form onSubmit={handleLogin}>
            <div className="flex flex-col gap-8">
              <input
              required
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered input-info w-96 "
              />
              <input
              required
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