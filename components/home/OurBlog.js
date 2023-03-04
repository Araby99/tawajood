import React from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '@/pages/data/data';
import Link from 'next/link';

const OurBlog = () => {
    const owlRespoinsive = {
        0: {
            items: 1
        },
        1000: {
            items: 3
        },
        1600: {
            items: 4
        },
    }
    return (
        <div className='our-blog py-5'>
            <Container fluid className='p-5'>
                <div className="section-main-title mb-5">
                    <p className="section-title-sm">Our Blog</p>
                    <p className="section-title">Our Blog</p>
                </div>
                <div className="blog-container">
                    <OwlCarousel className='owl-theme' dots={false} autoplay autoplayTimeout="3000" autoplayHoverPause loop margin={50} center responsive={owlRespoinsive}>
                        {
                            data[0].blog.map((blog, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="cover">
                                            <img src={blog.cover} alt="Cover" />
                                        </div>
                                        <div className="date">
                                            <img src="/images/blog/calendar.png" alt="Time" />
                                            <p className='m-0'>{blog.date}</p>
                                        </div>
                                        <p className="title">{blog.title}</p>
                                        <div className="tags">
                                            {
                                                blog.tags.map((tag, index) => {
                                                    return (
                                                        <p key={index}>#{tag}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <p className="content">{blog.content.slice(0, 100)}...</p>
                                        <div className="read"><Link href=""><img src="/images/icons/arrow-right-2.png" alt="Arrow" /></Link></div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                    <div className="see-more-blogs d-flex justify-content-end">
                        <Link href="/blog">See More abour our Blogs <img src="/images/icons/arrow-right-2.png" alt="Arrow" /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurBlog