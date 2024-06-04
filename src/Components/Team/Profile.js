const Profile = (props) => {
    if (props.data === null) return "";
    const { name, designation, img, language, experience, skillset, member, total, bio, icons } = props.data;
    return (
        <div className="profile">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="avatar">
                        <img src={img} alt="" />
                        <div className="infoCard text-center">
                            <h2 className='mb-0'>{name}</h2>
                            <p className='mb-0 text-theme'>{designation}</p>
                        </div>
                    </div>
                    <div className="socailMedia mt-2">
                        <h5 className="title fw-bold mb-4">Social Media</h5>
                        <div className="socailIcons">
                            <div className="row">
                                {icons.map((item, index) => {
                                    return (
                                        <div key={index} className={`${item.url !== '' ? 'socailIcon' : ''} col-3`}>
                                            <a href={(item.url !== '' ? item.url : '#::javascript;')} target={(item.url !== '' ? '_blank' : '_self')} rel="noreferrer">
                                                <div className="item text-center">
                                                    {item.icon}
                                                    <p className='mt-1 mb-3'>{item.name}</p>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="infoDetail">
                        <div className="d-flex align-items-center">
                            <div className="w-50">Name:</div>
                            <div className="w-50">{name}</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50">Role:</div>
                            <div className="w-50"> {designation} </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50">Languages:</div>
                            <div className="w-50"> {language} </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50">Experience:</div>
                            <div className="w-50"> {experience} </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50">Skillset:</div>
                            <div className="w-50"> {skillset} </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50">Member since:</div>
                            <div className="w-50">{member}</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50">Total Earnings:</div>
                            <div className="w-50"> {total} </div>
                        </div>
                    </div>
                    <h5 className="title fw-bold mt-4">Bio:</h5>
                    <p className='mt-2 bio'> {bio} </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;