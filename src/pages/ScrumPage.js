import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/Header/Header'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import Scrum from '../Components/Scrum/Scrum';

const ScrumPage = () => {
  return (
    <>
        <Header/>
        <PageBanner title='Scrum' bannerBg={bannerBg} currentPage='Welcome to the CryptoSI Team Scrums page, where you can get an inside look at how our team operates and the collaborative process we use to bring our projects to life.' />
        <Scrum/>
        <FooterTwo/>
    </>
  )
}

export default ScrumPage