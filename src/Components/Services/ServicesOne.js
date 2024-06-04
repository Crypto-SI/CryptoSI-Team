import { Link } from "react-router-dom";
import servicesOneData from "./servicesOneData";

const ServicesOne = () => {
    return (
        <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
            <div className="row mtm-30">
                <div className="col-md-6 col-12 col-lg-4 mt-30">
                    <div className="block-contents">
                        <div className="section-title">
                            <h2>What We Offer You</h2>
                        </div>
                    </div>
                </div>
                {
                    servicesOneData.map((data) => (
                        <div className="col-md-6 col-12 col-lg-6 mt-30" key={data.id}>
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${data.bg})`}}></div>
                                <div className="icon">
                                    <i className={`flaticon-${data.icon}`}></i>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">{data.title}</Link></h4>
                                    <ul className="checked-features-list">
                                        {
                                            data.desc.map((desc, idx) => (
                                                <li key={idx}>{desc}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}

export default ServicesOne;