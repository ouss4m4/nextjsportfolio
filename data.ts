import { IconType } from 'react-icons';
import { RiComputerLine } from 'react-icons/ri';

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    title: 'Backend Developer',
    about: `lorem ip  softwares for the digital transformation of the company
    Following enterprise standards and archite`,
    Icon: RiComputerLine,
  },
  {
    title: 'Frontend Developer',
    about: 'lorem ipsum dollor sit amet',
    Icon: RiComputerLine,
  },
  {
    title: 'Fullstack Developer',
    about: 'lorem ipsum dollor sit amet',
    Icon: RiComputerLine,
  },
];
