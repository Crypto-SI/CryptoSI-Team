import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/Header/Header'
import bannerBg from '../assets/img/interview.png';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import Content from "../Components/Interview/Content";
import CtaOne from "../Components/Cta/CtaOne";

const InterviewPage = () => {
  return (
    <>
        <Header/>
        <PageBanner title='Interviews' bannerBg={bannerBg} currentPage='Welcome to the CryptoSI Team Interviews page, where you can get to know our team members on a personal and professional level.' />
        <Content/>
        <CtaOne/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default InterviewPage