import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const OurBlog = (props) => {
    const owlRespoinsive = {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1600: {
            items: 4,
            margin: 50
        }
    }
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const router = useRouter()
    const isMobile = width <= 768;
    const navIfMobile = link => {
        if (isMobile) {
            router.push(link);
        }
    }
    return (
        <div className='our-blog py-5'>
            <Container fluid className='p-5'>
                <div className="section-main-title mb-5">
                    <p className={`section-title-sm ${props.mode}`}>Our Blog</p>
                    <p className="section-title">Our Blog</p>
                </div>
                <div className={`blog-container ${props.mode}`}>
                    <OwlCarousel className='owl-theme' dots={false} autoplay autoplayTimeout="3000" autoplayHoverPause loop margin={50} center responsive={owlRespoinsive}>
                        {
                            props.data[0].blog.map((blog, index) => {
                                return (
                                    <div className="item" key={index} onClick={() => navIfMobile(`/blog/${blog.id}`)}>
                                        <div className="cover">
                                            <img src={blog.cover} alt="Cover" />
                                        </div>
                                        <div className="date">
                                            <img src="/images/blog/calendar.png" alt="Time" />
                                            <p className='m-0'>{blog.date}</p>
                                        </div>
                                        <p className="title">{blog.title}</p>
                                        <p className="content">{blog.content.slice(0, 100)}...</p>
                                        <div className="read"><Link href={`/blog/${blog.id}`}><img src="/images/icons/arrow-right-2.png" alt="Arrow" /></Link></div>
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