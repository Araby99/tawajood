import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import Banner from 'components/about/Banner'
import Description from 'components/about/Description'
import OurMissionAndVision from 'components/about/OurMissionAndVision'
const OurCompanyProfile = dynamic(import('components/about/OurCompanyProfile'), { ssr: false });
const MeetOurTeam = dynamic(import('components/about/MeetOurTeam'), { ssr: false });

const About = () => {
    return (
        <>
            <Head>
                <title>Tawajood | About Us</title>
            </Head>
            <div className="about">
                <Banner />
                <Description />
                <OurMissionAndVision />
                <OurCompanyProfile />
                <MeetOurTeam />
            </div>
        </>
    )
}

export default About