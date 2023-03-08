import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from 'next/link';

const RelatedArticles = (props) => {
    const owlRespoinsive = {
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
    const navText = [
        '<span class="arrow prev"><img src="/images/icons/arrow-left-2.png" alt"Arrow" /></span>',
        '<span class="arrow next"><img src="/images/icons/arrow-right-2.png" alt"Arrow" /></span>'
    ]
    return (
        <div className='our-company-profile related py-5 w-75 m-auto'>
            <div className="section-main-title">
                <p className={`section-title-sm ${props.mode}`}>Articles</p>
                <p className="section-title">Related Articles</p>
            </div>
            <div className={`blog-container ${props.mode}`}>
                <OwlCarousel className='owl-theme' autoplay nav={true} margin={20} autoplayTimeout="3000" navText={navText} dots={false} autoplayHoverPause loop center responsive={owlRespoinsive}>
                    {
                        props.data[0].blog.map((blog, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="cover">
                                        <img src={blog.cover} alt="Cover" />
                                    </div>
                                    <div className="date">
                                        <img src="/images/blog/calendar.png" alt="Time" />
                                        <p className='m-0'>{blog.date}</p>
                                    </div>
                                    <Link href={`/blog/${blog.id}`}>
                                        <p className="title">{blog.title}</p>
                                    </Link>
                                    <div className="tags">
                                        {
                                            blog.tags.map((tag, index) => {
                                                return (
                                                    <Link key={index} href={{
                                                        pathname: "/blog",
                                                        query: {
                                                            tag: tag
                                                        }
                                                    }}>#{tag}</Link>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="content">{blog.content.slice(0, 100)}...</p>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default RelatedArticles