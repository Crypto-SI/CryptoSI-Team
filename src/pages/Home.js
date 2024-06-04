import AboutOne from "../Components/About/AboutOne";
import CtaOne from "../Components/Cta/CtaOne";
import FooterOne from "../Components/Footer/FooterOne";
import Header from "../Components/Header/Header";
import HeroOne from "../Components/Hero/HeroOne";
import HeroSocials from "../Components/Hero/HeroSocials";
import ServicesOne from "../Components/Services/ServicesOne";

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSocials/>
            <HeroOne/>
            <AboutOne/>
            <ServicesOne/>
            <CtaOne/>
            <FooterOne/>
        </>
    )
}

export default Home;