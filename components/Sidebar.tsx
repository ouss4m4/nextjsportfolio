import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/ouss4m4/bzouss/master/content/assets/profile-pic600.png"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Oussama </span>
        Baaziz
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full "
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social Buttons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 text-blue-800 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 text-blue-500 cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Setif,Ageria</span>
        </div>
        <p className="my-2">bz.oussama@gmail.com</p>
      </div>
      {/* contact*/}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:bz.oussama@gmail.com')}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 ">
        Dark Mode
      </button>
    </div>
  );
};

export default Sidebar;
