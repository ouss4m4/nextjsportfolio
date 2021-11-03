import { FC } from 'react';
import { ICategory } from '../types';

const NavItem: FC<{
  value: ICategory | 'all';
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

const ProjectsNavbar = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="Nodejs" {...props} />
      <NavItem value=".Net" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Desktop" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
