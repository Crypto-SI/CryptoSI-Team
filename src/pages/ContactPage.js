import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import Header from '../Components/Header/Header'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import ContactPageContents from "../Components/Contact/ContactPageContents";

const ContactPage = () => {
  return (
    <>
        <Header/>
        <PageBanner title='Contact Us' bannerBg={bannerBg} currentPage='Welcome to the CryptoSI Team Contact Us page. If you have any questions or would like to get in touch with us, please feel free to reach out using the following contact information' />
        <ContactPageContents/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default ContactPage;
