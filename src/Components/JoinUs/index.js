import React, { useState } from 'react'
import post1 from '../../assets/img/blog/p1.jpg'
import post5 from '../../assets/img/blog/p5.jpg'
import ModalVideo from 'react-modal-video';

const NewsWrapper = () => {
    const [isOpen, setOpen] = useState(false);

  return (
    <>
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="EZ9DrY43wtw"
            onClose={() => setOpen(false)}
        />
        <section className="blog-wrapper news-wrapper section-padding">
            <div className="container">
                <div className="blog-posts row">
                    <div className="single-blog-post col-md-6 col-12 h-100">
                        <div className="post-featured-thumb bg-cover" style={{backgroundImage:`url(${post1})`}}></div>
                        <div className="post-content">
                            <p>We are always on the lookout for talented developers and writers who share our passion for innovation and cutting-edge technology. If you're interested in joining our team and being a part of the next wave of blockchain development, you've come to the right place.On this page, you will find a Google Form that you can fill out to apply for a position on our team. The form will ask about your preferred programming languages, your level of experience, and a few personality questions to help us get to know you better.We are committed to building a diverse and inclusive team that values different perspectives and approaches to problem-solving.</p>
                        </div>
                    </div>
                    <div className="single-blog-post col-md-6 col-12">
                        <div className="post-featured-thumb bg-cover" style={{backgroundImage:`url(${post5})`}}></div>
                        <div className="post-content">
                            <p> Whether you're a seasoned developer with years of experience or just starting out on your journey in the world of blockchain, we encourage you to apply and join us in building something truly special.We believe that the strength of our team is what sets us apart, and we are excited to welcome new members who share our vision and passion for innovation.If you have any questions or would like more information about our team and the work we do, please don't hesitate to get in touch.We look forward to hearing from you and potentially working together to push the boundaries of what's possible in the world of blockchain and crypto!</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-center mt-5">Google Form Coming Soon</h3>
            </div>
        </section>
    </>
   
  )
}

export default NewsWrapper;