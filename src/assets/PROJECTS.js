import campMateImg from '../assets/project-photos/campmate1.png';
import carRentalImg from '../assets/project-photos/car-rental2.png';
import coinPulseImg from '../assets/project-photos/coinpulse2.png';
import todoAppImg from '../assets/project-photos/todo.png';
import tenziesImg from '../assets/project-photos/tenzies.png';
import foodOrderImg from '../assets/project-photos/food-order.png';
import shoppingCartImg from '../assets/project-photos/shopping-cart.png';
import rickMortyImg from '../assets/project-photos/rick-and-morty.png';
import currencyConventerImg from '../assets/project-photos/currency-conventer.png';
import calculatorImg from '../assets/project-photos/calculatir.png';
import expensesApp from '../assets/project-photos/expenses=app.png';
import tictactoeImg from '../assets/project-photos/tic-tac-toe.png';
import caesarCipherImg from '../assets/project-photos/caesar-cipher.png';
import ruftImg from '../assets/project-photos/ruft.png';
import classyAdsImg from '../assets/project-photos/classy-ads-thumbnail.png';
import easyFeastImg from './project-photos/easy-feast.PNG';

export const PROJECTS = [
  {
    id: 'easy-feast-v1',
    title: 'EASY FEAST',
    description:
      'B2C food ordering app with real-time updates, address management, and optional addons. Frontend developed in React, TypeScript, Firebase, styled with Tailwind CSS for user-friendly features and efficient order management.',
    img: easyFeastImg,
    link: 'https://easy-feast.web.app/',
    source: 'https://github.com/sandro-buzhghulashvili/easy-feast',
    techStack: [
      'reactjs',
      'typescript',
      'tailwind',
      'framer-motion',
      'chartjs',
    ],
    disclaimer: 'Admin credentials: username - admin, password - admin5',
  },
  {
    id: 'p1',
    title: 'CAR RENTAL',
    description:
      'Welcome to our user-friendly Car Rental Website! Easily rent cars for personal or business use, with options for short trips or extended rentals. Find the perfect vehicle to meet your needs effortlessly.',
    img: carRentalImg,
    link: 'https://car-rental-6eaf1.firebaseapp.com',
    source: 'https://github.com/sandro-buzhghulashvili/car-rental-react',
    techStack: ['reactjs', 'scss', 'mapbox', 'firebase'],
  },
  {
    id: 'p15',
    title: 'Classy ADS',
    description:
      'A stylish, full-stack platform for seamless ad posting and viewing. Built with React and Firebase, it boasts animated elements, smooth navigation with React Router, and elegant Sass styling. Experience dynamic ads effortlessly.',
    img: classyAdsImg,
    link: 'https://classy-ads-8216b.web.app',
    source: 'https://github.com/sandro-buzhghulashvili/classy-ads',
    techStack: ['reactjs', 'scss', 'framer-motion', 'redux', 'firebase'],
  },
  {
    id: 'p3',
    title: 'COINPULSE',
    description: `Welcome to our Crypto Search Web App! I showcase my API skills through React routers, including loaders. This app simulates a real-world cryptocurrency tool, offering a modern and responsive user experience.    `,
    img: coinPulseImg,
    link: 'https://coinpulse-50f2d.web.app',
    source: 'https://github.com/sandro-buzhghulashvili/coin-pulse-react',
    techStack: ['reactjs', 'css', 'rest-api'],
  },
  {
    id: 'p2',
    title: 'CAMP MATE',
    description:
      'Camp Mate: Explore, share, and rate nearby campgrounds. Your ultimate companion for outdoor adventures. Register with a temporary email for full-stack features powered by Node and MongoDB.',
    img: campMateImg,
    link: 'https://camp-mate.onrender.com/',
    source: 'https://github.com/sandro-buzhghulashvili/campmate-private',
    techStack: ['nodejs', 'express', 'bootstrap', 'mongodb'],
    disclaimer:
      'This fullstack app is hosted on free service and it might take a while to load',
  },
  {
    id: 'p4',
    title: 'TODO APP',
    description: `This todo app offers user to add,manage and classify tasks. It uses local storage, so every task will be saved. App also gives us fancy ways to filter
    tasks by their category.`,
    img: todoAppImg,
    link: 'https://todo-app-683e5.web.app',
    source: 'https://github.com/sandro-buzhghulashvili/todo-react',
    techStack: ['html', 'css', 'javascript', 'local storage'],
  },
  {
    id: 'p15',
    title: 'TENZIES GAME',
    img: tenziesImg,
    source: 'https://github.com/sandro-buzhghulashvili/tenzies-game-react',
    link: 'https://tenzies-game-c9428.web.app/',
  },
  {
    id: 'p5',
    title: 'FOOD ORDER APP',
    img: foodOrderImg,
    source: 'https://github.com/sandro-buzhghulashvili/food-order-app-react',
    link: 'https://food-order-app-8377d.web.app',
  },
  {
    id: 'p6',
    title: 'REDUX SHOPPING CART',
    img: shoppingCartImg,
    source:
      'https://github.com/sandro-buzhghulashvili/shoppingcart-system-redux',
    link: 'https://redux-shopping-64b94.web.app',
  },
  {
    id: 'p7',
    title: 'REACT CALCULATOR',
    img: calculatorImg,
    source: 'https://github.com/sandro-buzhghulashvili/react-calculator',
    link: 'https://react-calculator-b6a1a.web.app',
  },
  {
    id: 'p8',
    title: 'EXPENSES APP',
    img: expensesApp,
    source: 'https://github.com/sandro-buzhghulashvili/expenses-app-react',
    link: 'https://expenses-app-8ce81.web.app',
  },
  {
    id: 'p9',
    title: 'RICK AND MORTY API',
    img: rickMortyImg,
    source: 'https://github.com/sandro-buzhghulashvili/Ricky-and-morty-angular',
    link: 'https://github.com/sandro-buzhghulashvili/Ricky-and-morty-angular',
  },
  {
    id: 'p10',
    title: 'CURRENCY CONVENTER',
    img: currencyConventerImg,
    source:
      'https://github.com/sandro-buzhghulashvili/Currency-conventer-angular',
    link: 'https://github.com/sandro-buzhghulashvili/Currency-conventer-angular',
  },
  {
    id: 'p11',
    title: 'TIC TAC TOE',
    img: tictactoeImg,
    link: 'https://quiet-souffle-6e20e8.netlify.app',
    source: 'https://github.com/sandro-buzhghulashvili/tic-tac-toe-vanillajs',
  },
  {
    id: 'p12',
    title: 'CAESAR CIPHER',
    img: caesarCipherImg,
    link: 'https://caesar-cipher-sbji.netlify.app',
    source: 'https://github.com/sandro-buzhghulashvili/caesar-cipher-vanillajs',
  },
  {
    id: 'p13',
    title: 'RUFT(landing page)',
    img: ruftImg,
    link: 'https://ruft-sbji.netlify.app',
    source: 'https://github.com/sandro-buzhghulashvili/ruft-ui-html',
  },
];
