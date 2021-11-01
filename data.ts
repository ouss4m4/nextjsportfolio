import { RiComputerLine } from 'react-icons/ri';
import { BsCircleFill } from 'react-icons/bs';

import { IService, ISkill } from './types';

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

export const languages: ISkill[] = [
  {
    name: 'C',
    level: '50%',
    Icon: BsCircleFill,
  },
  {
    name: 'TypeScript',
    level: '65%',
    Icon: BsCircleFill,
  },
  {
    name: 'JavaSCript',
    level: '85%',
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: 'Vscode',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'Electron',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'NativeScript',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'Angular',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '85%',
    Icon: BsCircleFill,
  },
];
