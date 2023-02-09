import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormdata] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const onLogOut = () => {
    auth.signOut();
    navigate("/");
    toast.success("Logged out successfully!");
  };

  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    try {
      const auth = getAuth();
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
        toast.success("Your profile was updated successfully!");
      }
    } catch (error) {
      toast.error("Couldn't update your profile!");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <h1 className="mt-6 text-3xl font-bold text-center">My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3">
        <form>
          {/* input field with the value of the variable "name" disabled and with a specific style. */}
          <input
            type="text"
            id="name"
            value={name}
            disabled={!changeDetail}
            onChange={onChange}
            className={`w-full px-4 py-2 mb-6 text-xl text-gray-500 transition ease-in-out bg-white border-gray-300 rounded ${
              changeDetail && "bg-red-200 focus:bg-red-200"
            }`}
          />

          {/* input field with the value of the variable "email" disabled and with a specific style. */}

          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="w-full px-4 py-2 mb-6 text-xl text-gray-500 transition ease-in-out bg-white border-gray-300 rounded"
          />
          <div className="flex justify-between mb-6 text-sm whitespace-nowrap sm:text-lg">
            <p className="flex items-center">
              Do you want to change your name?
              <span
                onClick={() => {
                  changeDetail && onSubmit();
                  setChangeDetail((prevState) => !prevState);
                }}
                className="text-red-600 transition duration-150 ease-in-out cursor-pointer hover:text-red-700"
              >
                {changeDetail ? "Apply changes" : "Edit"}
              </span>
            </p>
            <p
              onClick={onLogOut}
              className="text-blue-600 transition duration-150 ease-in-out cursor-pointer hover:text-blue-800"
            >
              Sign Out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
