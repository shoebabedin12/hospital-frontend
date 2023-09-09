import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="auth">
        <form method="POST">
          <h2 className="auth_title">Sign up</h2>
          <div className="mb-3">
            <select
              name="type"
              id="disabledSelect"
              className="form-select custom_input"
            >
              <option value="hospital">Hospital</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          {/* <!-- Name --> */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              id="name"
              className="form-control custom_input"
              type="text"
              name="name"
              required
            />
            <span className="mt-2">Error</span>
          </div>

          {/* <!-- Email Address --> */}
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              id="email"
              className="form-control custom_input"
              type="email"
              name="email"
              required
            />
            <span className="mt-2">Error</span>
          </div>

          {/* <!-- Password --> */}
          <div className="mt-4">
            <label htmlFor="password">Password</label>

            <input
              placeholder="Password"
              id="password"
              className="form-control custom_input"
              type="password"
              name="password"
              required
            />
            <span className="mt-2">Error</span>
          </div>

          {/* <!-- Confirm Password --> */}
          <div className="mt-4">
            <label htmlFor="password_confirmation">Confirm Password</label>

            <input
              placeholder="Confirm password"
              id="password_confirmation"
              className="form-control custom_input"
              type="password"
              name="password_confirmation"
              required
            />

            <span className="mt-2">Error</span>
          </div>

          <div className="flex items-center  mt-4">
            <Link
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              to="#"
            >
              Already registered?
            </Link>

            <button className="ml-4">Register</button>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
