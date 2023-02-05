import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function OAuth() {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
      toast.success("Sign In was successful!");
    } catch (error) {
      toast.error("Could not sign in with Google!");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center justify-center w-full py-3 text-sm font-medium text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded shadow-md px-7 hover:bg-red-700 active:bg-red-800 hover:shadow-lg"
      >
        <FcGoogle className="mr-2 text-2xl bg-white rounded-full" />
        Continue with Google
      </button>
    </div>
  );
}
