/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Link } from 'react-router-dom';
import google from '../../assets/google.png'

const Register = () => {
    const handleRegister =(e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);

        if(password !== confirmPassword){
            alert("Password didn't matched");
            return
        }
        else if(password.length < 8){
            alert("Your password should contain at least 8 characters");
            return
        }
        form.reset();
    }
    return (
      <div>
        <div className="w-1/3 mx-auto mt-10">
          <p className="text-4xl text-center font-bold">SignUp</p>
          <div className="mt-12 border p-10 rounded-xl ">
            <Form onSubmit={handleRegister}>
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
                <input
                required
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered input-info w-96 "
                />
              </div>

              <section className="text-center mt-8">
                <button className=" btn btn-info px-10">SignUp</button>
              </section>
              <div className="mt-5">
                <hr className="w-96 mx-auto" />
              </div>
              <div className="mt-8 text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="p-4 hover:bg-slate-700 rounded-xl underline font-bold"
                >
                  LogIn
                </Link>
              </div>
            </Form>

            <div className='mt-10'>
              <span className='flex items-center justify-between'>
                <hr className="w-48 " />
                <span className='font-bold'>Or</span>
                <hr className="w-48 " />
              </span>
            </div>

            <div className='mt-8'>
                <p className='text-center text-xl'>Log In With</p>
            </div>

            <div className='btn flex gap-5 items-center justify-center mt-8 border py-2 rounded-xl'>
<img src={google} alt="" />
<p>Google</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;