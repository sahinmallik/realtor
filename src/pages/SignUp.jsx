import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success("Sign Up was successful!");
    } catch (error) {
      toast.error("Something went wrong with the registration!");
    }
  };

  return (
    <section>
      <h1 className="mt-6 text-3xl font-bold text-center">Sign Up</h1>
      <div className="flex flex-wrap items-center justify-center max-w-6xl px-6 py-12 mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="md:w-[67%] w-full lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
            />
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute text-xl cursor-pointer top-3 right-3"
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute text-xl cursor-pointer top-3 right-3"
                />
              )}
            </div>
            <div className="flex items-center justify-between text-sm whitespace-nowrap sm:text-lg">
              <p className="mb-6">
                Have an account?
                <Link
                  to={"/sign-in"}
                  className="ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700"
                >
                  Sign In
                </Link>
              </p>
              <p className="mb-6">
                <Link
                  to={"/forgot-password"}
                  className="ml-1 text-blue-600 transition duration-200 ease-in-out hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-sm font-medium text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
            >
              Sign Up
            </button>
            <div className="flex items-center my-4 before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1">
              <p className="mx-4 font-semibold text-center">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
