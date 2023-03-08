import Banner from 'components/Jobs/Banner'
import Head from 'next/head'
import React from 'react'
import JobsContainer from 'components/jobs/JobsContainer';

const index = (props) => {
    return (
        <>
            <Head>
                <title>Tawajood | Jobs</title>
            </Head>
            <div className='blog'>
                <Banner />
                <JobsContainer mode={props.mode} jobs={props.data[0].jobs} />
            </div>
        </>
    )
}

export default index