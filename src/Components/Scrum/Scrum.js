import React from 'react'
import bannerBg from '../../assets/img/scrum.png';


const Scrum = () => {
  return (
    <section className="best-featured-wrapper section-padding pb-5 mb-5">
        <div className="container-lg">
            <div className="row mtm-40 align-items-center">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-best-featured right">
                    <div className="icon">
                        <i className="flaticon-flow-chart" />
                    </div>
                    <div className="content-text">
                        <h5>Technology</h5>
                        <p>On this page, you will find videos of our team meetings as we discuss the projects we are currently working on.</p>
                    </div>
                    </div>
                    <div className="single-best-featured right">
                    <div className="icon">
                        <i className="flaticon-writing" />
                    </div>
                    <div className="content-text">
                        <h5>Core Planning</h5>
                        <p>These videos include planning, preparation, and highly technical information that demonstrates how individual team members work together and showcase their strengths and weaknesses.</p>
                    </div>
                    </div>
                    <div className="single-best-featured right">
                    <div className="icon">
                        <i className="flaticon-interior-design" />
                    </div>
                    <div className="content-text">
                        <h5>Project Result</h5>
                        <p>We believe that transparency and open communication are essential to the success of any project, which is why we are excited to share these videos with you.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 p-md-0 mt-5 mb-5 mt-md-0 mb-md-0 col-md-6 col-12">
                    <div className="center-img text-center mbm-50">
                    <img src={bannerBg} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-best-featured">
                    <div className="icon">
                        <i className="flaticon-secure-shield" />
                    </div>
                    <div className="content-text">
                        <h5>Trusted Clients</h5>
                        <p>By watching these scrums, you can gain insight into our process, the challenges we face, and the creative solutions we come up with as a team.</p>
                    </div>
                    </div>
                    <div className="single-best-featured">
                    <div className="icon">
                        <i className="flaticon-team" />
                    </div>
                    <div className="content-text">
                        <h5>Skilled Team</h5>
                        <p>We hope that this page gives you a deeper understanding of how we work and the expertise and dedication that we bring to every project.</p>
                    </div>
                    </div>
                    <div className="single-best-featured">
                    <div className="icon">
                        <i className="flaticon-profits" />
                    </div>
                    <div className="content-text">
                        <h5>Save Money</h5>
                        <p> If you're interested in learning more about our process or working with us on a project, please don't hesitate to get in touch. We look forward to hearing from you!</p>
                    </div>
                    </div>
                </div>
            </div>
            <h2 className="text-center mt-5">Coming soon</h2>
        </div>
    </section>

  )
}

export default Scrum