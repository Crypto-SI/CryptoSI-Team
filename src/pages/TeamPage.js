import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/Header/Header'
import PageBanner from '../Components/PageBanner';
import AboutOne from '../Components/About/AboutOne';
import AboutBanner from '../Components/About/AboutBanner';
import TeamThree from '../Components/Team/TeamThree';
import BrandCarouselThree from '../Components/Brands/BrandCarouselThree';
// import ProfileDatail from '../Components/Team/ProfileDatail';

const TeamPage = () => {
  return (
    <>
        <Header/>
        <PageBanner/>
        <AboutOne pt />
        <AboutBanner/>
        <TeamThree/>
        {/* <ProfileDatail /> */}
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default TeamPage