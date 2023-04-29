/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import cover from "../../assets/cover1.jpg";
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room1.jpg'
import room3 from '../../assets/room3.jpg'
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Home = () => {
  const {user} = useContext(AuthContext);
  // console.log(user.displayName);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const deadline = new Date("2023-05-15"); // Set the date and time when the offer will end

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <img className="w-screen mx-auto" src={cover} alt="" />
      <div className="mt-16">
        <p className="text-center font-extrabold text-2xl">
          The Offer Will over in :
        </p>
        <div className="text-center">
          <div className="justify-center mt-10 grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": days }}>{days}</span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": hours }}>{hours}</span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": minutes }}>{minutes}</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": seconds }}>{seconds}</span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={room1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              {user ? (
                <div>
                  <Link className="btn btn-primary">Book Now</Link>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="btn btn-primary">
                    Login for Book
                  </Link>
                </div>
              )}
              {console.log(user)}
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={room2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              {user ? (
                <div>
                  <Link className="btn btn-primary">Book Now</Link>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="btn btn-primary">
                    Login for Book
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={room3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              {user ? (
                <div>
                  <Link className="btn btn-primary">Book Now</Link>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="btn btn-primary">
                    Login for Book
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
