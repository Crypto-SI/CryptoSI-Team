import "swiper/css";
import "swiper/css/navigation";
import portfolioOneData from "./portfolioOneData";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const PortfolioOne = () => {
    return (
        <section className="portfolio-carousel-wrapper clearfix section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <h2>Recent Completed Projects</h2>
                                <p>Our team is dedicated to exploring the potential of blockchain and cryptocurrency, and we are proud to have competed in and won prizes at a number of hackathons. On this page, you will find a showcase of some of the projects that we have created, along with video demos and detailed blog posts that explain the thinking behind each project and the technologies that we used to build them.We believe that our projects demonstrate the depth of expertise and the innovative thinking that our team brings to every project we work on. Whether it's creating new ways to securely store and transfmeer crypto assets or developing decentralized applications that leverage the power of blockchain technology, we are constantly exploring new possibilities and pushing the boundaries of what's possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: true,

                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: true,

                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 20,

                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {
                        portfolioOneData.map((data) => (
                            <SwiperSlide className="single-project-item" key={data.id}>
                                <SRLWrapper>
                                    <a href={data.img}>
                                        <div className="project-img bg-cover bg-center popup-gallery" style={{ backgroundImage: `url(${data.img})` }}>
                                            <div className="icon">
                                                <i className="fal fa-plus"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="content-text">
                                        <span>{data.category}</span>
                                        <h4><Link to="/projectDetails">{data.title}</Link></h4>
                                        <p>{data.date}</p>
                                    </div>
                                </SRLWrapper>
                            </SwiperSlide>
                        ))
                    }
                </Swiper> */}
                <h2 className="text-center mt-5">Overview</h2>
                <div className="row">
                {
                    portfolioOneData.map((data) => (
                        <Fade duration={1800} className="col-lg-3 col-md-4 col-sm-6" key={data.id} triggerOnce>
                            <div className="single-project-item">
                                <span className="angles"></span>
                                <div className="project-img bg-cover bg-center popup-gallery ratio ratio-1x1 rounded" style={{ backgroundImage: `url(${data.img})` }}>
                                    <div className="content-text">
                                        <span>{data.category}</span>
                                        <h3 className="text-danger"><Link to="/projectDetails">{data.title}</Link></h3>
                                        <span>{data.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default PortfolioOne;