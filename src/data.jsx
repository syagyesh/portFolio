import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Yagyesh',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Sharma',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Jhalrapatan, Jhalawar',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+918769302009',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'syagyesh91@mail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: '<a href="https://github.com/syagyesh"> syagyesh </a>',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '3',
    title: 'Completed <br /> Projects',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Sports Coordinator <span> Government Engineering College Jhalawar </span>',
    desc: 'Participated as a Chess Coordinator in Intra Collge Sports Competition',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Front-End Developer <span> Bits to Bytes Robotics </span>',
    desc: 'Done internship in Front-End Development with BBR ltd.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Sports Webpage<span> Government Engineering College Jhalawar </span>',
    desc: 'Made a Static Sports Webpage for my college in a group.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-PRESENT',
    title: 'Engineering Degree <span> Government Engineering College Jhalawar </span>',
    desc: 'Persuing B.Tech in Computer Science and Engineering. Currently in 3rd Year, CGPA: 9.5',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Higher Secondary Education <span> Board of Secondary Education Rajasthan </span>',
    desc: 'Passed with 91.60%',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Secondary Education <span> Board of Secondary Education Rajasthan </span>',
    desc: 'Passed with 93.50%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '30',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '70',
  },

  {
    id: 6,
    title:  'Java',
    percentage: '60',
  },

  {
    id: 7,
    title:  'MySql',
    percentage: '70',
  },

  {
    id: 8,
    title:  'Python',
    percentage: '60',
  },

  {
    id: 9,
    title:  'Bash',
    percentage: '48',
  },

  {
    id: 10,
    title: 'React',
    percentage: '50',
  },

  {
    id: 11,
    title:  'C',
    percentage: '90',
  },

  {
    id: 12,
    title:  'C++',
    percentage: '80',
  },

  {
    id: 13,
    title:  'Java',
    percentage: '60',
  },

  {
    id: 14,
    title:  'Linux',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Calculator',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Myself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://syagyesh.github.io/calculator" target="_blank">Simple Calculator </a>',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Analog Clock',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Myself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://syagyesh.github.io/analog-clock" target="_blank">Analog-Clock </a>',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Assignment',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'BBR',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://syagyesh.github.io/assign" target="_blank">Assignment</a>',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Java Project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Airline Management',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Myself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://github.com/syagyesh/airline" target="_blank">Airline </a>',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
