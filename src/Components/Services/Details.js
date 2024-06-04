import React from 'react'

const Details = () => {
    return (
    <section className="service-details-wrapper section-padding">
        <div className="container d-flex flex-column gap-5">
            <p className="text-black h3" data-aos="fade-up" data-aos-duration="600">At CryptoSI, we believe that cognitive diversity is the key to unlocking innovation and building solutions that can truly make a difference. That's why we are committed to building a community that is inclusive, supportive, and dedicated to pushing the boundaries of what's possible.</p>
            <p className="text-black h3" data-aos="fade-left" data-aos-duration="1000">On this page, you will find information about how you can join our community, including links to our Discord server and other projects created by our team. We believe that by working together and sharing ideas, we can create innovative solutions that have the potential to change the world.</p>
            <p className="text-black h3" data-aos="fade-right" data-aos-duration="1300">As a member of our community, you will have the opportunity to spread awareness of our team and projects, and to help support new team members as they join our ranks. Whether you're a seasoned crypto veteran or just starting to explore the possibilities of blockchain technology, we welcome you to join our community and be a part of something truly special.</p>
            <p className="text-black h3" data-aos="fade-bottom" data-aos-duration="1600">We believe that the strength of our community is what sets us apart, and we look forward to welcoming you into the fold. If you have any questions or would like more information about how to get involved, please don't hesitate to reach out. We are excited to have you join us on this journey!</p>
            <ul className="d-flex gap-4">
                <li><a href="https://github.com/Crypto-SI" without rel="noreferrer" target="_blank"><i className="fab fa-github fa-2x"></i></a></li>
                <li><a href="https://discord.gg/63JbDWV" without rel="noreferrer" target="_blank"><i className="fab fa-discord fa-2x"></i></a></li>
            </ul>
        </div>
    </section>

    )
}

export default Details