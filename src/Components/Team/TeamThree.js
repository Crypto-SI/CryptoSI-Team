import React, { useState, useEffect } from 'react'
import Profile from './Profile';
import { teamData } from './teamThreeData';

const TeamThree = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [userName, setName] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleImageClick = (index, e) => {
        setActiveIndex(index);
        setName(e.getAttribute('alt'));
        const selectData = teamData.teamThreeData.filter(item => item.name === e.getAttribute('alt'));
        setUserData(selectData[0]);
    };

    useEffect(() => {
        const selectData = teamData.teamThreeData.filter(item => item.name === 'CryptoSI');
        setUserData(selectData[0]);
    }, [])

    return (
        <section className="our-team-wrapper section-padding pb-0">
            <div className="container">
                <div className="row">
                    <div className="text-center col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <h2>Profile Details</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="title fw-bold mb-4">Our teams</h5>
                        </div>
                        <div className="col-md-4">
                            <h5 className="title responsiveTitle fw-bold mb-4" style={{ marginLeft: '45px' }}>Profile Detail</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="team-tabs">
                                {teamData.teamThreeData.map((data, idx) => {
                                    return (
                                        <div className='teamImg' key={idx}>
                                            <img
                                                src={data.img}
                                                className={`team-member-avatar ${activeIndex === idx ? 'active' : ''}`}
                                                key={idx}
                                                alt={data.name}
                                                onClick={(e) => handleImageClick(idx, e.target)}
                                            />
                                            <div className="backOver">
                                                {userName}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="filter-group">
                                <h5 className="title fw-bold mt-2">Filters</h5>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>DAO PAYMENTS</td>
                                            <td>
                                                <div className="d-flex justify-content-end">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="dao-payment-switch" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>HACKATHON WINS</td>
                                            <td>
                                                <div className="d-flex justify-content-end">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="hackathon-win-switch" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>DAPP REVENUE</td>
                                            <td>
                                                <div className="d-flex justify-content-end">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="dapp-revenue-switch" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <Profile data={userData} />
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGmcvZMNASyPk4F-N00KQ3Wx202M18v8oxRtg-QtGTvKXijQ/viewform?usp=sf_link" target='_blank' className='btn-apply' rel='noreferrer'> APPLY </a>
                </div>

            </div>
        </section>
    )
}

export default TeamThree