import Banner from 'components/blog/Banner'
import Head from 'next/head'
import React, { useState } from 'react'
import data from '@/pages/data/data';
import BlogContainer from 'components/blog/BlogContainer';
import { useRouter } from 'next/router';

const index = () => {
    const route = useRouter();
    const [blogs, setBlogs] = useState(data[0].blog);
    const [filterActive, setFilterActive] = useState(route.query.tag !== undefined ? route.query.tag : undefined);
    const filter = tag => setFilterActive(tag)
    return (
        <>
            <Head>
                <title>Tawajood | Blog</title>
            </Head>
            <div className='blog'>
                <Banner blogTags={data[0].blogTags} filterActive={filterActive} filter={filter} />
                <BlogContainer blogs={blogs} filterActive={filterActive} setFilterActive={setFilterActive} />
            </div>
        </>
    )
}

export default index