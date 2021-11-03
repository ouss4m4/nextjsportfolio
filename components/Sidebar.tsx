import { useTheme } from 'next-themes';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import Image from 'next/image';

interface Props {}

const Sidebar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Image
        src="https://raw.githubusercontent.com/ouss4m4/bzouss/master/content/assets/profile-pic600.png"
        alt="user avatar"
        className="mx-auto rounded-full"
        width="245"
        height="245"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Oussama </span>
        Baaziz
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark">
        Software Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 "
        href="https://drive.google.com/file/d/1vwrJkVirI0vyYeEqVKRVfA4O9yhtVHFe/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <GiTie className="w-6 h-6" />
        Resume
      </a>
      {/* Social Buttons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer dark:text-white" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 text-blue-800 cursor-pointer dark:text-white" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 text-blue-500 cursor-pointer dark:text-white" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
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
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 "
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button> */}
    </div>
  );
};

export default Sidebar;
