import { FC } from 'react';
import { IStack } from '../types';

const NavItem: FC<{
  value: IStack | 'all';
  handleFiltering: Function;
  active: string;
}> = ({ value, handleFiltering, active }) => {
  let classNames = 'capitalize cursor-pointer hover:text-green';
  if (active === value) {
    classNames += ' text-green';
  }
  return (
    <li className={classNames} onClick={() => handleFiltering(value)}>
      {value}
    </li>
  );
};

const ToolsNavbar = (props) => {
  return (
    <div className="flex mb-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="Front-End" {...props} />
      <NavItem value="Back-End" {...props} />
      <NavItem value="Desktop" {...props} />
      <NavItem value="Mobile" {...props} />
      <NavItem value="DevOps" {...props} />
    </div>
  );
};

export default ToolsNavbar;
