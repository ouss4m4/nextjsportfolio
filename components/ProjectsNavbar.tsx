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
      <NavItem value="angular" {...props} />
      <NavItem value="c#" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="react" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
