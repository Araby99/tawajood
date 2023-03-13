import Head from 'next/head'
import React, { useState } from 'react'
import BlogContainer from 'components/blog/BlogContainer';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Banner = dynamic(import('components/blog/Banner'), { ssr: false });

const Blogs = (props) => {
    const route = useRouter();
    const [filterActive, setFilterActive] = useState(route.query.tag !== undefined ? route.query.tag : undefined);
    const filter = tag => setFilterActive(tag)
    return (
        <>
            <Head>
                <title>Tawajood | Blog</title>
            </Head>
            <div className='blog'>
                <Banner style={props.style} blogTags={props.data[0].blogTags} filterActive={filterActive} filter={filter} />
                <BlogContainer mode={props.mode} lang={props.lang} blogs={props.data[0].blog} filterActive={filterActive} setFilterActive={setFilterActive} />
            </div>
        </>
    )
}

export default Blogs