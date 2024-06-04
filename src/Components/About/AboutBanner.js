import React from 'react'

const AboutBanner = () => {
  return (
    <section className="about-banner-wrapper section-padding theme-bg">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>Insight of The Company</span>
                            <p className="text-white">On this page, you will find information about each of our team members, including their skills and experience. We believe in transparency and open communication, which is why we have also included links to video interviews featuring each member of the team. These interviews provide a deeper insight into each member's background, experience, and philosophy on the world of crypto and blockchain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="icon-arrow-down">
            <div className="rotate-icon">
                <i className="flaticon-navigation"></i>
            </div>
        </div>
    </section>
  )
}

export default AboutBanner