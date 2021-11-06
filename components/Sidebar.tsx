import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

import { GoLocation } from 'react-icons/go';
import { BsTelegram } from 'react-icons/bs';
import { GiTie } from 'react-icons/gi';
import Image from 'next/image';
import React from 'react';

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div className="text-whitetxt font-lines">
      <Image
        src="https://raw.githubusercontent.com/ouss4m4/bzouss/master/content/assets/profile-pic600.png"
        alt="user avatar"
        className="mx-auto rounded-full"
        width="120"
        height="120"
      />
      <h3 className="my-4 text-4xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Oussama </span>
        Baaziz
      </h3>
      <p className="px-2 py-1 my-3 text-lg font-bold rounded-full bg-dark-200 font-headers">
        Software Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 text-lg font-medium rounded-full bg-dark-200"
        href="https://drive.google.com/file/d/1Kh3v6JZvLPOftJAc1IUL4NiBg4G3gjw7/view"
        target="_blank"
        rel="noreferrer"
      >
        <GiTie className="w-6 h-6" />
        Resume
      </a>
      {/* Social Buttons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a href="https://github.com/ouss4m4" target="_blank" rel="noreferrer">
          <AiFillGithub className="w-8 h-8 font-bold text-white cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/bzouss/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 text-white cursor-pointer" />
        </a>
        <a href="https://twitter.com/0uss4m4" target="_blank" rel="noreferrer">
          <AiFillTwitterCircle className="w-8 h-8 text-white cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />

          <span>El-Eulma, Algeria</span>
        </div>
        <div className="flex items-center justify-center my-4 space-x-2">
          <AiOutlineWhatsApp size="24" />
          <BsTelegram size="24" />
          <span className="text-white font-lines">+213 666 095 895</span>
        </div>
        <p className="my-2 text-lg">bz.oussama@gmail.com</p>
      </div>
      {/* contact*/}
      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full text-whitetxt bg-dark-200"
        onClick={() => window.open('mailto:bz.oussama@gmail.com')}
      >
        Email Me
      </button>
    </div>
  );
};

export default Sidebar;
