import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedRooms: 1,
    bathRooms: 1,
    parkingSpot: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountPrice: 0,
  });

  const {
    type,
    name,
    bedRooms,
    bathRooms,
    parkingSpot,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
  } = formData;

  const onChange = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="mt-6 text-3xl font-bold text-center">Create a Listing</h1>
      <form>
        <p className="mt-6 text-lg font-semibold">Sell / Rent</p>

        <div className="flex items-start justify-center mt-6">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`w-full mr-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`w-full ml-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>
        <div className="flex">
          <p className="mt-6 text-lg font-semibold">Name</p>
          <IoStarSharp className="mt-6 text-sm text-red-600" />
        </div>
        <input
          className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength={32}
          minLength={10}
          required
        />
        <div className="flex mb-6 space-x-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedRooms"
              value={bedRooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="w-full px-4 py-2 mb-6 text-xl text-center text-gray-700 transition ease-in-out bg-white border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathRooms"
              value={bathRooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="px-4 py-2 mb-6 text-xl text-center text-gray-700 transition ease-in-out bg-white border-gray-300 rounded w- full focus:text-gray-700 focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold">Parking Spot</p>

        <div className="flex items-start justify-center mt-6">
          <button
            type="button"
            id="parkingSpot"
            value={true}
            onClick={onChange}
            className={`w-full mr-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              parkingSpot === false
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="parkingSpot"
            value={false}
            onClick={onChange}
            className={`w-full ml-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              parkingSpot === true
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>
        <p className="mt-6 text-lg font-semibold">Furnished</p>

        <div className="flex items-start justify-center mt-6">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`w-full mr-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              furnished === false
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`w-full ml-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              furnished === true
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>
        <p className="mt-6 text-lg font-semibold">Address</p>
        <textarea
          className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
        />
        <p className="text-lg font-semibold">Offer</p>

        <div className="flex items-start justify-center mt-6 mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`w-full mr-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              offer === false
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`w-full ml-3 py-3 text-sm font-medium uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg active:shadow-lg ${
              offer === true ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold">Regular Price</p>
          <div className="flex w-full space-x-6">
            <div>
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                required
                min={50}
                max={400000000}
                className="w-full px-4 py-2 text-xl text-center text-gray-700 transition ease-in-out bg-white border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
              />
            </div>
            {type === "rent" && (
              <div className="w-full text-md whitespace-nowrap">
                <p>$ / Month</p>
              </div>
            )}
          </div>
        </div>
        {offer === true && (
          <div className="mb-6">
            <p className="text-lg font-semibold">Discounted Price</p>
            <div div className={`flex  w-full space-x-6`}>
              <div>
                <input
                  type="number"
                  id="discountPrice"
                  value={discountPrice}
                  onChange={onChange}
                  required
                  min={50}
                  max={400000000}
                  className="w-full px-4 py-2 text-xl text-center text-gray-700 transition ease-in-out bg-white border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
                />
              </div>
              {type === "rent" && (
                <div className="w-full text-md whitespace-nowrap">
                  <p>$ / Month</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover(max 6)
          </p>

          <input
            className="w-full px-3 py-1.5 text-gray-700 transition ease-in-out bg-white border border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mb-6 text-sm font-medium text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
