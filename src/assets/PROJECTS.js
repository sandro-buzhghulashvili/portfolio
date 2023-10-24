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
import traveloImg from '../assets/project-photos/travelo.png';

export const PROJECTS = [
  {
    id: 'p1',
    title: 'CAR RENTAL',
    description: `This is car rental website which allows users to rent cars for personal or business use. 
    User experience is more delicated, as it offers interactive map features to select pick up and drop off locations.
    All data comes from firebase realtime database, so every order or change that you make will be tracked and saved in real time`,
    img: carRentalImg,
    link: 'https://car-rental-6eaf1.firebaseapp.com',
    source: 'https://github.com/sandro-buzhghulashvili/car-rental-react',
  },
  {
    id: 'p2',
    title: 'CAMP MATE',
    description: `Camp Mate is an innovative online platform designed to cater to outdoor enthusiasts and adventure seekers, offering a user-friendly space to discover, 
      share, and rate exciting campgrounds in their vicinity. Whether you're a seasoned camper or a novice explorer, Camp Mate is your ultimate 
      companion for an unforgettable outdoor experience. App also includes full stack features, mainly node and mongodb, so you need to register
       with fake(temporary) email`,
    img: campMateImg,
    link: 'https://camp-mate.onrender.com/',
    source: 'https://github.com/sandro-buzhghulashvili/campmate-private',
  },
  {
    id: 'p3',
    title: 'COINPULSE',
    description: `Welcome to our cutting-edge Crypto Search Web App! Designed with cryptocurrency enthusiasts and investors in mind, our platform is
    your one-stop solution for staying informed in the dynamic world of digital assets.With our user-friendly interface, you can effortlessly check the latest market
    updates and track specific currencies in real-time.`,
    img: coinPulseImg,
    link: 'https://coinpulse-50f2d.web.app',
    source: 'https://github.com/sandro-buzhghulashvili/coin-pulse-react',
  },
  {
    id: 'p4',
    title: 'TODO APP',
    description: `This todo app offers user to add,manage and classify tasks. It uses local storage, so every task will be saved. App also gives us fancy ways to filter
    tasks by their category.`,
    img: todoAppImg,
    link: 'https://todo-app-683e5.web.app',
    source: 'https://github.com/sandro-buzhghulashvili/todo-react',
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
  {
    id: 'p14',
    title: 'TRAVELO(landing page)',
    img: traveloImg,
    link: 'https://gilded-tapioca-29dc10.netlify.app',
    source: 'https://github.com/sandro-buzhghulashvili/travelo-html',
  },
];
