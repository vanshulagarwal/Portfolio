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
import img41 from '../assets/project/41.png';
import img42 from '../assets/project/42.png';
import img43 from '../assets/project/43.png';
import img44 from '../assets/project/44.png';
import img45 from '../assets/project/45.png';
import img46 from '../assets/project/46.png';
import img47 from '../assets/project/47.png';
import img51 from '../assets/project/51.png';
import img52 from '../assets/project/52.png';

import contest from '../assets/flaticon/contest.gif'
import chart from '../assets/flaticon/chart.gif'
import upRightArrow from '../assets/flaticon/up-right-arrow.gif'
import militaryMedal from '../assets/flaticon/military-medal.gif'
import ratings from '../assets/flaticon/ratings.gif'
import question from '../assets/flaticon/question.gif'
import bestQuality from '../assets/flaticon/best-quality.gif'
import blackFriday from '../assets/flaticon/black-friday.gif'
import views from '../assets/flaticon/views.gif'
import contribution from '../assets/flaticon/contribution.gif'
import repository from '../assets/flaticon/repository.gif'
import streak from '../assets/flaticon/streak.gif'


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
        name: "Coding",
        hash: "#coding",
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
        projectName: "Codaez",
        projectDesc: "A platform for self-analysis and competition integrating data from LeetCode, Codeforces, and CodeChef. Utilized GitHub Actions for scheduled data refresh. Features include Leaderboard with min-max normalization, performance tracking, upcoming contests calendar, follow requests, etc.",
        techStack: [react, redux, node, express, sass],
        projectImg: [img41, img42, img43, img44, img45, img46, img47],
        projectRepo: 'https://github.com/vanshulagarwal/Codaez',
        projectUrl: "https://codaez.onrender.com/",
    },
    {
        projectName: "VASHOP",
        projectDesc: "E-commerce platform built with MERN stack.  Implemented User Authentication with JSON Web Tokens (JWT). User-friendly features such as search, Redux-managed cart and user state, user reviews, product filters, and MongoDB Atlas for scalable data.",
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
        projectName: "Shipment Logistic Optimizer",
        projectDesc: "Optimizes the logistics of shipments across various ports using algorithms like Floyd-Warshall, 0/1 Knapsack and KMP String Matching. Calculates the best routes, transportation costs, and generates digital invoices.",
        techStack: [cpp],
        projectImg: [img51, img52],
        projectRepo: 'https://github.com/vanshulagarwal/ShipmentLogisticOptimizer',
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

const codingProfilesData = {
    codeforces: [
        {
            image: contest,
            heading: "Contests",
            data: "23+",
        },
        {
            image: question,
            heading: "Problems",
            data: "675+",
        },
        // {
        //     image: chart,
        //     heading: "Rating",
        //     data: 1310,
        // },
        {
            image: upRightArrow,
            heading: "Max Rating",
            data: 1339,
        },
        {
            image: militaryMedal,
            heading: "Rank",
            data: "Pupil",
        },
        // {
        //     image: ratings,
        //     heading: "Max Rank",
        //     data: "Pupil",
        // },
    ],

    leetcode: [
        {
            image: contest,
            heading: "Contests",
            data: "32+",
        },
        {
            image: question,
            heading: "Problems",
            data: "680+",
        },
        // {
        //     image: chart,
        //     heading: "Rating",
        //     data: 1732,
        // },
        {
            image: upRightArrow,
            heading: "Max Rating",
            data: 1803,
        },
        // {
        //     image: militaryMedal,
        //     heading: "Rank",
        //     data: 70157,
        // },
        // {
        //     image: bestQuality,
        //     heading: "Badge",
        //     data: "Knight",
        // },
        {
            image: blackFriday,
            heading: "Top %",
            data: "<10.85",
        },
    ],

    github: [
        {
            image: contribution,
            heading: "Contributions",
            data: "410+",
        },
        {
            image: streak,
            heading: "Max Streak",
            data: 19,
        },
        {
            image: repository,
            heading: "Repositories",
            data: "32+",
        },
        {
            image: views,
            heading: "Views",
            data: "900+",
        },
    ]
}

export { navLinks, projectData, skillsData, educationData, certificationsData, codingProfilesData };