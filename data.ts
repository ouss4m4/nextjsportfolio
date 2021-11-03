import { RiComputerLine } from 'react-icons/ri';
import { BsCircleFill } from 'react-icons/bs';

import { IProject, IService, ISkill } from './types';

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

export const projects: IProject[] = [
  {
    name: 'Sales Order WebApp',
    category: ['c#', 'react'],
    deployed_url: 'https://salesorder-app.azurewebsites.net/',
    github_url: 'https://github.com/ouss4m4/sales-order',
    description:
      'WebApp to create SalesOrders for clients. Built from scratch with Net Core and React. Deployed at Azure',
    image_path: '/images/salesorder.png',
    tags: ['C#', 'DotNet', 'React', 'TypeScript', 'Azure'],
  },
];
