import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  return (
    <>
      <section className="auth">
        <form action="#">
          <h2 className="auth_title">Sign In</h2>

          {/* <!-- Email Address --> */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              className="form-control custom_input"
              id="email"
              type="email"
              name="email"
              required
            />
            {error ? <span className="mt-2">Error</span> : ""}
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

            {error ? <span className="mt-2">Error</span> : ""}
          </div>

          {/* <!-- Remember Me --> */}
          <div className="block mt-4">
            <label for="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                name="remember"
              />
              <span className="ms-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <Link
            to="/forgot-password"
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Forgot your password?
          </Link>

          <button type="submit" className="btn mt-3">
            Sign In
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
