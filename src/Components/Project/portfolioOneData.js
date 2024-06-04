import {v4 as uuidv4} from 'uuid';
import portfolio1 from '../../assets/img/project/1.jpg';
import portfolio2 from '../../assets/img/project/2.jpg';
import portfolio3 from '../../assets/img/project/3.jpg';
import portfolio4 from '../../assets/img/project/4.jpg';
import portfolio5 from '../../assets/img/project/5.png';
import portfolio6 from '../../assets/img/project/6.png';
import portfolio7 from '../../assets/img/project/7.png';
import portfolio8 from '../../assets/img/project/8.png';

const portfolioOneData = [
    {
        id: uuidv4(),
        img: portfolio1,
        category: 'ARCHITECTS',
        title: 'Office ARCHITECTS',
        date: 'Jan 05 2013'
    },

    {
        id: uuidv4(),
        img: portfolio2,
        category: 'DESIGN',
        title: 'CATALYST ARCHITECTS',
        date: 'May 25 2010'
    },

    {
        id: uuidv4(),
        img: portfolio3,
        category: 'Interior',
        title: 'HILIX COMPUND VILLA',
        date: 'Jul 25 2012'
    },

    {
        id: uuidv4(),
        img: portfolio4,
        category: 'Decoration',
        title: 'Home Decoration',
        date: 'Nov 28 2018'
    },
    {
        id: uuidv4(),
        img: portfolio5,
        category: 'NFT Marketplace',
        title: 'Bidify.org',
        date: 'Jan 05 2022'
    },

    {
        id: uuidv4(),
        img: portfolio6,
        category: 'Decentralized Finance',
        title: 'Vulcan Pad',
        date: 'May 25 2023'
    },

    {
        id: uuidv4(),
        img: portfolio7,
        category: 'NFT Mint',
        title: 'Bidify NFT Mint',
        date: 'Jul 25 20222'
    },

    {
        id: uuidv4(),
        img: portfolio8,
        category: 'DeFi Exchange',
        title: 'Turbo Trade',
        date: 'Jan 25 20224'
    },
]

export default portfolioOneData;