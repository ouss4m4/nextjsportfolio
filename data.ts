import { IProject, ISkill, ITool } from './types';

export const projects: IProject[] = [
  {
    name: 'Angular .Net Store',
    category: ['Angular', '.Net'],
    deployed_url: null,
    github_url: 'https://github.com/ouss4m4/NgNetStore',
    description:
      'eCommerce application built from scrach using .Net core 6 for the backend, Redis as db for shopping cart, SQLServer for MS.Identity and Databse, Stripe as a payment Method, Angular for the frontend ',
    image_path: '/images/ngnetstore.png',
    tags: ['Angular', '.Net', 'Redis', 'SqlServer', 'Stripe', 'Azure'],
    id: 9,
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
    id: 3,
  },
  {
    name: 'Task Manager',
    category: ['React'],
    deployed_url: 'https://master.d3e64dmv8w4bbk.amplifyapp.com/',
    github_url: 'https://github.com/ouss4m4/Task-tracker',
    description:
      'Drag n Drop Task manager with persistance done in react deployed with Amazon Amplify',
    image_path: '/images/taskamanger.png',
    tags: ['React', 'React-dnd', 'Amazon Amplify'],
    id: 6,
  },
  {
    name: 'Reactive Programming',
    category: ['React'],
    deployed_url: 'https://master.d25nu9lnqvdjkf.amplifyapp.com/',
    github_url: 'https://github.com/ouss4m4/react-ts',
    description:
      'With the introduction of React hooks. working with rxjs subscriptions it now easily maintainable and the result is a smooth reactive UI/UX',
    image_path: '/images/rxjs-react-typescript.png',
    tags: ['React', 'RxJs', 'Amplify'],
    id: 7,
  },
  {
    name: 'SnapShot',
    category: ['Nodejs', 'React'],
    deployed_url: 'https://mern-app.herokuapp.com/',
    github_url: 'https://github.com/ouss4m4/snapShot',
    description:
      'Full Stack projects allows users to browse images. requires login to post and comment on other people photos. hosted on Heroku Free Tier slows the initial load',
    image_path: '/images/snapshot.png',
    tags: ['Heroku', 'React', 'MongoDb'],
    id: 4,
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
    id: 5,
  },
  {
    name: 'GraphQL and .Net Core',
    category: ['.Net'],
    deployed_url: null,
    github_url: 'https://github.com/ouss4m4/gql-netcore',
    description: '.NET API with GraphQL using ASP.HotChocolate and SqlServer',
    image_path: '/images/gql-dotnet.png',
    tags: ['.Net', 'GraphQl', 'ASP.HotChocolate', 'SqlServer'],
    id: 8,
  },
  {
    name: 'Clean Architecture Api',
    category: ['Nodejs'],
    deployed_url: 'https://ddd-sales.azurewebsites.net/api/v1',
    github_url: 'https://github.com/ouss4m4/ddd-sales',
    description:
      'Domain-Driven Design with Clean Architecture Concepts API to create Clients Items and Orders. Architecture understanding is the GOAL of the api not the data',
    image_path: '/images/clean-architecture.jpg',
    tags: ['ExpressJs', 'Node', 'MongoDb', 'DDDesign'],
    id: 1,
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
    id: 2,
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
    id: 4,
  },
];

export const skills: ISkill[] = [
  {
    name: 'Communication',
    description:
      'Providing solutions to different departments and working with diverse teams requires a lot of meetings and reportings. this sharpened my communication skills.',
  },
  {
    name: 'Critical Thinking',
    description:
      'Working on digitalization solutions means that non-technical clients define the needs. They trust me to make sensible and well-thought-out technical decisions.',
  },

  {
    name: 'Punctuality',
    description:
      'Working in a field with constantly changing demands required all our applications to be easily updated and always respect the deadline.',
  },
  {
    name: 'Teamwork',
    description:
      'Teamwork is vital. As a lead developer and a member on the Developers team.I have to collaborate effectively with teammates where communication is key.',
  },
  {
    name: 'E.Q',
    description:
      "Understanding one's own emotions. and using them in a positive way to relive stress. and communicate effectively to overcome challenges is a major factor for teamwork success.",
  },
  {
    name: 'Time Management',
    description:
      'My team uses JIRA® to Plan, track, and manage Software development. Creating sprints and releases. assigning tasks and delegating projects taught me the importance of time.',
  },
];

export const tools: ITool[] = [
  {
    name: 'TypeScript',
    stack: ['Back-End', 'Front-End', 'Mobile', 'Desktop'],
    image_path: '/images/ts-logo.svg',
  },

  {
    name: 'Angular',
    stack: ['Front-End', 'Mobile'],
    image_path: '/images/angular-logo.svg',
  },
  {
    name: 'ElectronJs',
    stack: ['Desktop'],
    image_path: '/images/electron-logo.svg',
  },
  {
    name: 'FireBase',
    stack: ['DevOps'],
    image_path: '/images/firebase-logo.svg',
  },
  {
    name: 'Flutter',
    stack: ['Mobile'],
    image_path: '/images/flutter-logo.svg',
  },
  {
    name: 'Gatsby',
    stack: ['Front-End'],
    image_path: '/images/gatsby-logo.svg',
  },
  {
    name: 'Git',
    stack: ['DevOps'],
    image_path: '/images/git-logo.svg',
  },
  {
    name: 'MongoDb',
    stack: ['Back-End'],
    image_path: '/images/mongodb-logo.svg',
  },
  {
    name: 'NativeScript',
    stack: ['Mobile'],
    image_path: '/images/nativescript-logo.svg',
  },
  {
    name: 'Netlify',
    stack: ['DevOps'],
    image_path: '/images/netlify-logo.svg',
  },
  {
    name: 'React',
    stack: ['Front-End'],
    image_path: '/images/react-logo.svg',
  },
  {
    name: 'Webpack',
    stack: ['DevOps'],
    image_path: '/images/webpack-logo.svg',
  },
  {
    name: 'C#',
    stack: ['Back-End', 'Desktop'],
    image_path: '/images/c--4.svg',
  },
  {
    name: 'Jira',
    stack: ['DevOps'],
    image_path: '/images/jira-1.svg',
  },
  {
    name: '.Net',
    stack: ['Back-End'],
    image_path: '/images/microsoft-net.svg',
  },
  {
    name: 'ExpressJs',
    stack: ['Back-End'],
    image_path: '/images/express-logo.svg',
    background: true,
  },
  {
    name: 'AWS',
    stack: ['DevOps'],
    image_path: '/images/aws-logo.svg',
    background: true,
  },
  {
    name: 'NodeJs',
    stack: ['Back-End', 'Desktop', 'Mobile'],
    image_path: '/images/node-logo.svg',
    background: true,
  },
];
