import React from 'react'
import Header from '../Components/Header/Header'
import PageBanner from '../Components/PageBanner'
import bannerBg from '../assets/img/join-us.png';
import FooterTwo from '../Components/Footer/FooterTwo';
import NewsWrapper from '../Components/JoinUs';

const JoinUs = () => {
  return (
    <>
      <Header/>
      <PageBanner title='Join Us' bannerBg={bannerBg} currentPage='Welcome to the CryptoSI Team Join Us page, where you can apply to join our team of blockchain and crypto enthusiasts.' />
      <NewsWrapper/>
      <FooterTwo/>
    </>
  )
}

export default JoinUs