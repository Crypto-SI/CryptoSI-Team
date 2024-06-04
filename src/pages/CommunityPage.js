import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/Header/Header'
import bannerBg from '../assets/img/community.png';
import PageBanner from '../Components/PageBanner';
import Details from '../Components/Services/Details';

const CommunityPage = () => {
  return (
    <>
        <Header/>
        <PageBanner title='Community' bannerBg={bannerBg} currentPage='Welcome to the CryptoSI Team Community page, where you can join our vibrant community of blockchain and crypto enthusiasts.' />
        <Details/>
        <FooterTwo/>
    </>
  )
}

export default CommunityPage;