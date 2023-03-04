import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OurCompanyProfile = () => {
    const [overlay, setOverlay] = useState(false);
    const owlRespoinsive = {
        0: {
            items: 1
        },
    }
    const navText = [
        '<span class="arrow prev"><img src="/images/icons/arrow-left-2.png" alt"Arrow" /></span>',
        '<span class="arrow next"><img src="/images/icons/arrow-right-2.png" alt"Arrow" /></span>'
    ]
    const navTextWhite = [
        '<span class="arrow prev"><img src="/images/icons/arrow-left-white.png" alt"Arrow" /></span>',
        '<span class="arrow next"><img src="/images/icons/arrow-right-white.png" alt"Arrow" /></span>'
    ]
    return (
        <div className='our-company-profile py-5 w-75 m-auto'>
            <div className="section-main-title mb-5">
                <p className="section-title-sm">Company Profile</p>
                <p className="section-title">Our Company Profile</p>
            </div>
            <OwlCarousel className='owl-theme' autoplay nav={true} autoplayTimeout="3000" navText={navText} dots={false} autoplayHoverPause loop center responsive={owlRespoinsive}>
                <div className="item" onClick={() => setOverlay(true)}>
                    <img src="/images/about/our-company-profile/about.png" alt="About" />
                </div>
                <div className="item" onClick={() => setOverlay(true)}>
                    <img src="/images/about/our-company-profile/about.png" alt="About" />
                </div>
                <div className="item" onClick={() => setOverlay(true)}>
                    <img src="/images/about/our-company-profile/about.png" alt="About" />
                </div>
                <div className="item" onClick={() => setOverlay(true)}>
                    <img src="/images/about/our-company-profile/about.png" alt="About" />
                </div>
                <div className="item" onClick={() => setOverlay(true)}>
                    <img src="/images/about/our-company-profile/about.png" alt="About" />
                </div>
            </OwlCarousel>
            <div className="download-our-cp d-flex justify-content-end">
                <a href="/files/tawajoodCP.pdf" download={"tawajoodCP"} className="d-flex gap-3 align-items-center">
                    <p className='m-0'>Download Our CP</p>
                    <img src="/images/icons/arrow-bottom-2.png" alt="Arrow" />
                </a>
            </div>
            {
                overlay && (
                    <div className="overlay">
                        <div className="background" onClick={() => setOverlay(false)}></div>
                        <OwlCarousel className='owl-theme' autoplay nav={true} autoplayTimeout="3000" navText={navTextWhite} dots={false} autoplayHoverPause loop center responsive={owlRespoinsive}>
                            <div className="item">
                                <img src="/images/about/our-company-profile/about.png" alt="About" />
                            </div>
                            <div className="item">
                                <img src="/images/about/our-company-profile/about.png" alt="About" />
                            </div>
                            <div className="item">
                                <img src="/images/about/our-company-profile/about.png" alt="About" />
                            </div>
                            <div className="item">
                                <img src="/images/about/our-company-profile/about.png" alt="About" />
                            </div>
                            <div className="item">
                                <img src="/images/about/our-company-profile/about.png" alt="About" />
                            </div>
                        </OwlCarousel>
                    </div>
                )
            }
        </div>
    )
}

export default OurCompanyProfile