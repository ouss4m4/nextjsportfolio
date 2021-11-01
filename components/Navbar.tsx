import React, { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
interface Props {}

const NavItem: FC<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};
const Navbar = (props: Props) => {
  const [activeItem, setactiveItem] = useState<string>('');
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === '/') setactiveItem('About');
    if (pathname === '/projects') setactiveItem('Projects');
    if (pathname === '/resume') setactiveItem('Resume');
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl ">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setactiveItem}
          name={'Resume'}
          route={'/resume'}
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setactiveItem}
          name={'Projects'}
          route={'/projects'}
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setactiveItem}
          name={'About'}
          route={'/'}
        />
      </div>
    </div>
  );
};

export default Navbar;
