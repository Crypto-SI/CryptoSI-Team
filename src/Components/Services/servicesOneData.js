import {v4 as uuidv4} from 'uuid';
import bg1 from '../../assets/img/services/1.jpg';
import bg2 from '../../assets/img/services/2.jpg';
import bg3 from '../../assets/img/services/3.jpg';

const servicesOneData = [
    {
        id: uuidv4(),
        bg: bg1,
        icon: 'blueprint',
        title: 'Back-End Development',
        desc: [
            "Strong understanding of data structures, algorithms, and databases",
            "Experience in building scalable and reliable back-end systems for blockchain applications",
            "Proficiency in programming languages such as Node.js, Java, and Python"
        ],
    },
    
    {
        id: uuidv4(),
        bg: bg2,
        icon: 'home',
        title: 'Front-End Development',
        desc: [
            "Expertise in front-end development frameworks and libraries, such as React and Vue.js",
            "Experience in building user-friendly interfaces for blockchain applications",
            "Knowledge of web development best practices, including accessibility and performance optimization"
        ],
    },

    {
        id: uuidv4(),
        bg: bg3,
        icon: 'varnish',
        title: 'Technical Writing',
        desc: [
            "Ability to write clear, concise, and accurate technical documentation",
            "Experience in creating technical articles, whitepapers, and user guides for blockchain applications",
            "Understanding of blockchain terminology and concepts, and ability to explain them in simple terms"
        ],
    },
    
]

export default servicesOneData;