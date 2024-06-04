import img from '../../assets/img/team/1.png';
import { teamData } from './teamThreeData';

const ProfileDatail = () => {
    return (
        <section id="detail">
            <div className="container">
                <div className="row">
                    <h1 className="my-5 text-center">Profile Detail</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-7">
                        <h5 className="title fw-bold mb-4">Profile Detail:</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td className="w-30">Name:</td>
                                    <td>John Pattrick</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Role:</td>
                                    <td>Developer</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Language:</td>
                                    <td>English, Arabic</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Experience:</td>
                                    <td>8 years</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Skillset:</td>
                                    <td>Python, Java, Ruby</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Member Since:</td>
                                    <td>Jun 2020</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Language:</td>
                                    <td>Python, Ruby, Java</td>
                                </tr>
                                <tr>
                                    <td className="w-30">Total Eearning:</td>
                                    <td>$30,350 </td>
                                </tr>
                            </tbody>
                        </table>
                        <h5 className="title fw-bold my-4">Bio:</h5>
                        <p className='mb-4'>John Patrick is working with our team since 2020 about year Esports world that exclusively competes in hackathons based on crypto currency technology. Our team is dedicated to
                            staying at the forefront of the latest trends and technologies in the crypto space, and we bring this expertise to every hackathon we compete in that exclusively competes area.</p>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className="profileAvatar mb-4">
                            <div>
                                <img src={img} alt="" />
                                <div className="profileInfo">
                                    <h5 className='mb-0'>Cryptosi</h5>
                                    <p className='text-theme'>Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <h5 className="title fw-bold mt-5" style={{ marginLeft: '50px' }}>Socail Media</h5>
                        <div className="row mt-3 px-5">
                            {teamData.mediaIcons.slice(0, 4).map((item, index) => {
                                return (
                                    <div key={index} className="col-3 socailIcon">
                                        <div className="item text-center">
                                            {item.icon}
                                            <p className='my-1'>{item.title}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <h5 className="title fw-bold mb-4">Fillter:</h5>
                <div className="row">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <p className='mb-0'>DAO PAYMENTS</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="dao-payment-switch" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <p className='mb-0'>HACKATHON WINS</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="dao-payment-switch" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <p className='mb-0'>DAPP REVENUE</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="dao-payment-switch" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ProfileDatail;