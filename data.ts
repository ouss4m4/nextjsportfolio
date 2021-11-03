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
    name: 'Clean Architecture Api',
    category: ['Nodejs'],
    deployed_url: 'https://ddd-sales.azurewebsites.net/api/v1',
    github_url: 'https://github.com/ouss4m4/ddd-sales',
    description:
      'Domain-Driven Design with Clean Architecture Concepts API to create Clients Items and Orders. Architecture understanding is the GOAL of the api not the data',
    image_path: '/images/clean-architecture.jpg',
    tags: ['ExpressJs', 'Node', 'MongoDb', 'DDDesign'],
  },
  {
    name: 'MicroServices API',
    category: ['.Net'],
    deployed_url: null,
    github_url: 'https://github.com/ouss4m4/k8s-net-rabbitmq',
    description:
      'Microservice architecture built with .netcore 5 using rabbitmq as eventbus and docker-k8s for deployment',
    image_path: '/images/k8s-ms-arch.png',
    tags: ['Docker', 'Kubernetes', '.Net', 'RabbitMQ', 'gRPC', 'SQL'],
  },
  {
    name: 'Sales Order WebApp',
    category: ['.Net', 'React'],
    deployed_url: 'https://salesorder-app.azurewebsites.net/',
    github_url: 'https://github.com/ouss4m4/sales-order',
    description:
      'WebApp to create SalesOrders for clients. Built from scratch with Net Core and React. Deployed at Azure',
    image_path: '/images/salesorder.png',
    tags: ['C#', 'DotNet', 'React', 'TypeScript', 'Azure'],
  },
  {
    name: 'Tournament Tracker',
    category: ['Desktop', '.Net'],
    deployed_url: null,
    github_url: 'https://github.com/ouss4m4/TournamentTracker',
    description:
      'Desktop app built with WinForms on .NetCore to create players add them to teams, create tournaments using these teams and rewards, depending on number of starting teams,assign BYEs and rounds ',
    image_path: '/images/TournamentTracker.JPG',
    tags: ['.NetCore WinForms', 'Dapper', 'SqlServer'],
  },
  {
    name: 'SnapShot',
    category: ['Nodejs', 'React'],
    deployed_url: 'https://mern-app.herokuapp.com/',
    github_url: 'https://github.com/ouss4m4/snapShot',
    description:
      'Full Stack projects allows users to browse images. requires login to post and comment on other people photos. hosted on Heroku Free Tier slows the initial load',
    image_path: '/images/snapshot.JPG',
    tags: ['Heroku', 'React', 'MongoDb'],
  },
  {
    name: 'Shopping List',
    category: ['Mobile'],
    deployed_url: 'https://shop-together-8d5e3.web.app',
    github_url: 'https://github.com/ouss4m4/shopping_list',
    description:
      'Flutter cross platform app to create a shopping list that contains the item name , quantity and add a photo if needed',
    image_path: '/images/shopping-list.png',
    tags: ['Flutter', 'Dart', 'Android', 'iOS'],
  },
  {
    name: 'Task Manager',
    category: ['React'],
    deployed_url: 'https://master.d3e64dmv8w4bbk.amplifyapp.com/',
    github_url: 'https://github.com/ouss4m4/Task-tracker',
    description:
      'Drag n Drop Task manager with persistance done in react deployed with Amazon Amplify',
    image_path: '/images/tasks-proj.png',
    tags: ['React', 'React-dnd', 'Amazon Amplify'],
  },
  {
    name: 'Reactive Programming',
    category: ['React'],
    deployed_url: 'https://master.d25nu9lnqvdjkf.amplifyapp.com/',
    github_url: 'https://github.com/ouss4m4/react-ts',
    description:
      'With the introduction of React hooks. working with rxjs subscriptions it now easily maintainable and the result is a smooth reactive UI/UX',
    image_path: '/images/rxjs-react.png',
    tags: ['React', 'RxJs', 'Amplify'],
  },
  {
    name: 'GraphQL and .Net Core',
    category: ['.Net'],
    deployed_url: null,
    github_url: 'https://github.com/ouss4m4/gql-netcore',
    description: '.NET API with GraphQL using ASP.HotChocolate and SqlServer',
    image_path: '/images/gql-dotnet.png',
    tags: ['.Net', 'GraphQl', 'ASP.HotChocolate', 'SqlServer'],
  },
];
