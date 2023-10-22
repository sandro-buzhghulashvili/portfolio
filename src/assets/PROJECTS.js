import campMateImg from '../assets/project-photos/campmate1.png';
import carRentalImg from '../assets/project-photos/car-rental2.png';
import coinPulseImg from '../assets/project-photos/coinpulse2.png';
import todoAppImg from '../assets/project-photos/todo.png';

export const PROJECTS = [
  {
    id: 'p1',
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
    id: 'p2',
    title: 'CAR RENTAL',
    description: `This is car rental website which allows users to rent cars for personal or business use. 
    User experience is more delicated, as it offers interactive map features to select pick up and drop off locations.
    All data comes from firebase realtime database, so every order or change that you make will be tracked and saved in real time`,
    img: carRentalImg,
    link: 'https://car-rental-6eaf1.firebaseapp.com',
    source: 'https://github.com/sandro-buzhghulashvili/car-rental-react',
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
];
