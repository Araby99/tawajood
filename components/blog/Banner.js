import Link from 'next/link'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = ({ blogTags, filter, filterActive }) => {
    const owlRespoinsive = {
        0: {
            items: 3
        },
        800: {
            items: 4
        },
        1200: {
            items: 7
        }
    }
    return (
        <div className='banner py-5 d-flex justify-content-center align-items-center flex-column'>
            <div className="current-path d-flex gap-3">
                <Link href="/">Home</Link>
                <span> | </span>
                <p>Blog</p>
            </div>
            <p className="title">Our Blog</p>
            <OwlCarousel className='filter owl-theme px-5' center margin={20} autoplayTimeout="3000" dots={false} autoplayHoverPause responsive={owlRespoinsive} startPosition={Math.floor(blogTags.length / 2)}>
                {
                    blogTags.map((tag, index) => (
                        <div className="item" key={index}>
                            <div className={`tag ${filterActive == tag ? "filter-active" : ""}`} onClick={() => filter(tag)}>
                                <p className="m-0 font-cairo-bold">{tag}</p>
                            </div>
                        </div>
                    ))
                }
            </OwlCarousel>
        </div>
    )
}

export default Banner