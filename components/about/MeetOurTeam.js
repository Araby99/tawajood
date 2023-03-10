import React from 'react';
import dynamic from 'next/dynamic';
const Member = dynamic(import('./Member'), { ssr: false });
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MeetOurTeam = (props) => {
    const owlRespoinsive = {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 3
        },
        1500: {
            items: 6
        }
    }
    const navText = [
        '<span class="arrow prev"><img src="/images/icons/arrow-left-2.png" alt"Left Arrow" /></span>',
        '<span class="arrow next"><img src="/images/icons/arrow-right-2.png" alt"Right Arrow" /></span>'
    ]
    return (
        <div className={`meet-our-team py-5 ${props.mode}`}>
            <div className="section-main-title mb-5">
                <p className={`section-title-sm ${props.mode}`}>Our Team</p>
                <p className="section-title">Meet Our Team</p>
            </div>
            <p className="description w-75 m-auto text-center">
                We can cover a part of your project (e.g., back-end development) and provide regular progress reports. We save you time and money by expanding your software development capabilities and minimizing management efforts. or we can work together with your internal team until project delivery.
            </p>
            <div className="level pb-3">
                <OwlCarousel className='owl-theme' margin={40} dots={false} nav={true} navText={navText} responsive={owlRespoinsive}>
                    <div className="item">
                        <Member name="Muhammad Mourad" position="CEO | Technical Manager" image="/images/about/meet-our-team/muhammad.png" />
                    </div>
                    <div className="item">
                        <Member name="Esraa Ali Elshafiey" position="Operations Manager" image="/images/about/meet-our-team/esraa.png" />
                    </div>
                    <div className="item">
                        <Member name="Ahmed Mostafa" position="IOS Developer" image="/images/about/meet-our-team/ahmed.png" />
                    </div>
                    <div className="item">
                        <Member name="Mohamed Mubarak" position="IOS Developer" image="/images/about/meet-our-team/mohamed.png" />
                    </div>
                    <div className="item">
                        <Member name="Abdelrahim Elshorbagy" position="Android Developer" image="/images/about/meet-our-team/abdelrahim.png" />
                    </div>
                    <div className="item">
                        <Member name="Islam Essam" position="Android Developer" image="/images/about/meet-our-team/islam.png" />
                    </div>
                    <div className="item">
                        <Member name="Nada Moawaad" position="Android Developer" image="/images/about/meet-our-team/nada.png" />
                    </div>
                    <div className="item">
                        <Member name="Fatma Assem" position="UI UX Designer" image="/images/about/meet-our-team/fatma.png" />
                    </div>
                    <div className="item">
                        <Member name="Mahmoud Mohamed" position="Backend Developer" />
                    </div>
                    <div className="item">
                        <Member name="Mostafa Sadoon" position="Backend Developer" image="/images/about/meet-our-team/mostafa.png" />
                    </div>
                    <div className="item">
                        <Member name="Mohamed Hamdy" position="Backend Developer" image="/images/about/meet-our-team/mohamed-hamdy.png" />
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default MeetOurTeam