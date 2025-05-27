import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-black text-white py-8 px-4 md:flex md:items-end">
        <div className="md:w-40 w-32 mx-auto md:mx-0 relative">
          <img
            className="rounded-full border-4 border-white"
            src="https://ibb.co/6JwCRJ7W"
            alt="avatar"
          />
          <button className="mt-2 bg-white text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-200 w-full">
            Edit Profile
          </button>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h2 className="text-2xl font-bold">K1pzy</h2>
          <p className="text-sm">Bandung/Dayeuhkolot</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-around text-center mb-6">
          <div>
            <p className="text-xl font-bold">2</p>
            <p className="text-sm text-gray-500">Photos</p>
          </div>
          <div>
            <p className="text-xl font-bold">40</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold">478</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <div className="bg-white p-4 rounded-md shadow">
            <p className="italic mb-1">Web Developer</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Recent Photos</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src=""
              alt="img1"
              className="rounded-md"
            />
            <img
              src=""
              alt="img2"
              className="rounded-md"
            />
            <img
              src=""
              alt="img3"
              className="rounded-md"
            />
            <img
              src=""
              alt="img4"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
