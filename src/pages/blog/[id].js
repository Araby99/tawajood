import { useRouter } from 'next/router'
import data from '@/pages/data/data';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Alert from 'react-bootstrap/Alert';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'next-share';

import useFade from 'components/methods/useFade';
import { useEffect } from 'react';
const RelatedArticles = dynamic(import('components/blog/RelatedArticles'), { ssr: false });

const Blog = (props) => {
    const router = useRouter()
    const { id } = router.query
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';
    const URL = `${origin}${router.asPath}`;
    const blog = data[0].blog[id - 1];
    useEffect(() => {
        if (!blog) {
            router.push("/404");
        }
    }, [blog])

    const [alert, setAlert, fadeProps] = useFade();
    const copy = url => {
        navigator.clipboard.writeText(url)
        setAlert(true);
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }
    return (
        <>
            {
                blog && (
                    <>
                        <Head>
                            <title>Tawajood | {blog.title}</title>
                        </Head>
                        <div className={`blog-item ${props.mode}`}>
                            {alert && (
                                <Alert variant="success" {...fadeProps} className="alert">
                                    Link Copied to clipboard !
                                </Alert>
                            )}
                            <div className="banner py-4 px-5 d-flex flex-column justify-content-between blog-banner">
                                <div className="overlay" style={{ backgroundImage: `url(${blog.cover})` }}></div>
                                <div className="current-path d-flex justify-content-center gap-3">
                                    <Link href="/">Home</Link>
                                    <span> | </span>
                                    <p>Blog</p>
                                </div>
                                <div className="d-flex justify-content-end px-3">
                                    <div className="date d-flex gap-3 align-items-center jusify-content-end">
                                        <img src="/images/blog/calendar.png" alt="Date" />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                                <div className="blog-title">
                                    <span>{blog.title}</span>
                                </div>
                            </div>
                            <div className="py-3 px-5 share d-flex gap-3 justify-content-end align-items-center border-bottom">
                                <div className="share-item">
                                    <FacebookShareButton
                                        url={URL && URL}
                                        blankTarget={true}
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </FacebookShareButton>
                                </div>
                                <div className="share-item">
                                    <LinkedinShareButton
                                        url={URL && URL}
                                        blankTarget={true}
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </LinkedinShareButton>
                                </div>
                                <div className="share-item">
                                    <TwitterShareButton
                                        url={URL && URL}
                                        blankTarget={true}
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </TwitterShareButton>
                                </div>
                                <div className="share-item" onClick={() => copy(URL)}>
                                    <i className="fas fa-link"></i>
                                </div>
                            </div>
                            <div className="blog-content p-5">
                                <div className="tags d-flex gap-5">
                                    {blog.tags.map((tag, index) => (
                                        <Link key={index} href={{
                                            pathname: "/blog",
                                            query: {
                                                tag: tag
                                            }
                                        }}>#{tag}</Link>
                                    ))}
                                </div>
                                <div className="content py-4">
                                    {blog.content}
                                </div>
                            </div>
                        </div>
                        <RelatedArticles {...props} />
                    </>
                )
            }
        </>
    )
}

export default Blog