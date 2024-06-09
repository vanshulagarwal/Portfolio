import cpp from '../assets/cpp.png';
import css from '../assets/css.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mui from '../assets/mu5.png';
import node from '../assets/node.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import sass from '../assets/sass.png';
import bootstrap from '../assets/bootstrap.png';
import express from '../assets/express.png';
import java from '../assets/java.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import php from '../assets/php.png';
import jwt from '../assets/jwt.png';

import img1 from '../assets/project/1.png';
import img2 from '../assets/project/2.png';
import img3 from '../assets/project/3.png';
import img4 from '../assets/project/4.png';
import img5 from '../assets/project/5.png';
import img6 from '../assets/project/6.png';
import img8 from '../assets/project/8.png';
import img11 from '../assets/project/11.png';
import img12 from '../assets/project/12.png';
import img13 from '../assets/project/13.png';
import img21 from '../assets/project/21.png';
import img22 from '../assets/project/22.png';
import img23 from '../assets/project/23.png';
import img24 from '../assets/project/24.png';
import img25 from '../assets/project/25.png';
import img31 from '../assets/project/31.png';
import img32 from '../assets/project/32.png';
import img33 from '../assets/project/33.png';
import img34 from '../assets/project/34.png';


const navLinks = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    }
]

const projectData = [
    {
        projectName: "VASHOP",
        projectDesc: "E-commerce platform built with with MERN stack. User-friendly features such as search, Redux-managed cart and user state, user reviews, product filters, and MongoDB Atlas for scalable data.",
        techStack: [react, redux, node, express, sass],
        projectImg: [img1, img2, img3, img6, img4, img5, img8],
        projectRepo: 'https://github.com/vanshulagarwal/VASHOP-client',
        projectUrl: "https://vashop.onrender.com/",
    },
    {
        projectName: "ListKeeper",
        projectDesc: "Secure list-keeping app with user registration, task grouping, and an attractive UI. Implemented strong protection against Mongo Injection and Cross-Site Scripting.",
        techStack: [node, express, mongodb, css],
        projectImg: [img11, img12, img13],
        projectRepo: 'https://github.com/vanshulagarwal/ListKeeper',
        projectUrl: "https://listkeeper.onrender.com/",
    },
    {
        projectName: "Yelpcamp",
        projectDesc: "Application for listing and reviewing campgrounds worldwide. Integrated MapBox API for map rendering and Passport.js. Secure against Mongo Injection and Cross-Site Scripting.",
        techStack: [express, mongodb, bootstrap],
        projectImg: [img21, img22, img23, img24, img25],
        projectRepo: 'https://github.com/vanshulagarwal/YelpCamp',
        projectUrl: "https://yelp-camp-697v.onrender.com",
    },
    {
        projectName: "Recipe Sharing",
        projectDesc: "Recipe Sharing Platform using PHP for backend logic, MySQL for database management, and XAMPP for local development. The platform enables users to add, view, and delete recipes.",
        techStack: [php, mysql, css],
        projectImg: [img31, img32, img33, img34],
        projectRepo: 'https://github.com/vanshulagarwal/RecipeSharingPlatform',
    },
];

const skillsData = [
    {
        name: "CPP",
        img: cpp
    },
    {
        name: "HTML",
        img: html
    },
    {
        name: "CSS",
        img: css
    },
    {
        name: "Javascript",
        img: javascript
    },
    {
        name: "Java",
        img: java
    },
    {
        name: "Bootstrap",
        img: bootstrap
    },
    {
        name: "Node.js",
        img: node
    },
    {
        name: "Git",
        img: git
    },
    {
        name: "MySQL",
        img: mysql
    },
    {
        name: "MongoDB",
        img: mongodb
    },
    {
        name: "Express",
        img: express
    },
    {
        name: "React",
        img: react
    },
    {
        name: "Redux",
        img: redux
    },
    {
        name: "Python",
        img: python
    },
    {
        name: "PHP",
        img: php
    },
    {
        name: "Sass",
        img: sass
    },
    {
        name: "MUI",
        img: mui
    },
    {
        name: "JWT",
        img: jwt
    },
];

const educationData = [
    {
        cardTitle: "B Tech (CSE)",
        title: "2022 - present",
        cardDetailedText: "CGPA: 8.9",
        cardSubtitle: "JIIT, Noida"
    },
    {
        cardTitle: "12th (CBSE)",
        title: "2021- 2022",
        cardDetailedText: "94.8%",
        cardSubtitle: "RNS World School"
    },
    {
        cardTitle: "10th (ICSE)",
        title: "2019 - 2020",
        cardDetailedText: "92%",
        cardSubtitle: "CKC"
    },
];

const certificationsData = [
    {
        cardTitle: "Python Skill Certificate",
        title: "February 2024",
        cardSubtitle: "HackerRank"
    },
    {
        cardTitle: "Python",
        title: "January 2024",
        cardSubtitle: "Kaggle"
    },
    {
        cardTitle: "Web Developer Bootcamp",
        title: "July 2023",
        cardSubtitle: "Udemy"
    },
];

export { navLinks, projectData, skillsData, educationData, certificationsData };