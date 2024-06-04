import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/Header/Header'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import PortfolioOne from "../Components/Project/PortfolioOne";
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";

const ProjectPage = () => {
  return (
    <>
        <Header/>
        <PageBanner title='Our Projects' bannerBg={bannerBg} currentPage='Welcome to the CryptoSI Team Projects page, where you can see the innovative solutions and cutting-edge technologies that our team has developed at hackathons focused on crypto currency technology.' />
        <PortfolioOne/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default ProjectPage;