import { meta, shopify, starbucks, tesla, vodafone, vois } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
  
];

export const experiences = [
    {
        title: "SDE intern",
        company_name: "VOIS",
        icon: vodafone,
        iconBg: "#accbe1",
        date: "July 2022- September 2022",
        points: [
            "Developed a user-friendly web application utilizing HTML, CSS, and JavaScript, integrated with React and Web3",
            "Implemented smart contracts on the blockchain to securely store transaction data",
             "Leveraged the GIPHY developer API to display captivating images to signify successful transactions",
        ],
    },
 
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Chinmayd2112',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/chinmay-deshmukh-6aa607206/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Live Coding chat',
        description: 'Developed a web application that allow users to create groups and experience real-time chat with other online users.',
        link: 'https://github.com/Chinmayd2112',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'youtube Playlist length calculator',
        description: 'YouTube Playlist Length Calculator utilizes the YouTube Data API to fetch details of each video within a playlist,that helps in calculation of playlist time',
        link: 'https://utubeplaylistlength.onrender.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Traveller Map',
        description: 'Designed and built a web app for finding and comparing travelling spot in the given area.',
        link: 'https://github.com/Chinmayd2112/travelmap',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Weather app',
        description: 'Built a weather app that allows a user to know the weather of a given location',
        link: 'https://github.com/Chinmayd2112/weather_app',
    },
   
];