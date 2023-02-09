import React from "react";
import spinner from "../assets/SVG/Spinner.svg";

export default function Spinner() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div>
        <img src={spinner} alt="Loading..." className="h-50" />
      </div>
    </div>
  );
}
