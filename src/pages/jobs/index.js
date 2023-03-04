import Banner from 'components/Jobs/Banner'
import Head from 'next/head'
import React, { useState } from 'react'
import data from '@/pages/data/data';
import JobsContainer from 'components/jobs/JobsContainer';

const index = () => {
    const [jobs, setJobs] = useState(data[0].jobs);
    return (
        <>
            <Head>
                <title>Tawajood | Jobs</title>
            </Head>
            <div className='blog'>
                <Banner />
                <JobsContainer jobs={jobs} />
            </div>
        </>
    )
}

export default index