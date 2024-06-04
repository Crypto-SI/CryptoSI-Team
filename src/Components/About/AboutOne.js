import imgBlock1 from '../../assets/img/home1/img-block1.jpg';

const AboutOne = ({pt}) => {

    return (
        <>
        <section className={pt ? 'about-section section-padding' : 'about-section section-padding pt-0 mt-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="img-block-pop-video">
                            <img src={imgBlock1} alt="busico"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <h2>creative building esports company</h2>
                            </div>
                            <p>We are proud to say that we are the first and only team in the Esports world that exclusively competes in hackathons based on crypto currency technology. Our team is dedicated to staying at the forefront of the latest trends and technologies in the crypto space, and we bring this expertise to every hackathon we compete in.</p>
                        </div>
                        <div className="tab-content-block">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="true">Hackathon Services</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-materials-tab" data-bs-toggle="pill" data-bs-target="#pills-materials" type="button" role="tab" aria-controls="pills-materials" aria-selected="false">Our Approach</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-approved-tab" data-bs-toggle="pill" data-bs-target="#pills-approved" type="button" role="tab" aria-controls="pills-approved" aria-selected="false">Our Values</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab">
                                    <div className="tab-inner-contents">
                                        <div className="checked-features-list">
                                            <ul>
                                                <li>Hackathon participation</li>
                                                <li>Raising awareness through our social channels</li>
                                                <li>Create new usecases for your technology</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-materials" role="tabpanel" aria-labelledby="pills-materials-tab">
                                    <div className="tab-inner-contents">
                                        <div className="checked-features-list">
                                            <ul>
                                                <li>Collaborative, team-based approach to hackathons</li>
                                                <li>Emphasis on innovation, creativity, and out-of-the-box thinking</li>
                                                <li>Attention to detail and commitment to quality results</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-approved" role="tabpanel" aria-labelledby="pills-approved-tab">
                                    <div className="tab-inner-contents">
                                        <div className="checked-features-list">
                                            <ul>
                                                <li>Dedication to professionalism and integrity in all aspects of our work</li>
                                                <li>Commitment to inclusivity and diversity within our team</li>
                                                <li>Passion for excellence, transparency and a drive to push the boundaries of what is possible in hackathons</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutOne;