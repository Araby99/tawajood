import Head from 'next/head'
import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic';
import Carousel from 'components/home/Carousel'
import Services from 'components/home/Services'
import Industries from 'components/home/Industries'
import ProjectLifeCycle from 'components/home/ProjectLifeCycle'
import GetInTouchWithUs from 'components/home/GetInTouchWithUs';
import OurTopNotch from 'components/home/OurTopNotch';
import WhyChoosingUs from 'components/home/WhyChoosingUs';
const OurClients = dynamic(import('components/home/OurClients'), { ssr: false });
const OurBlog = dynamic(import('components/home/OurBlog'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })
const Home = (props) => {
    return (
        <>
            <Head>
                <title>Tawajood | Home Page</title>
            </Head>
            <Carousel {...props} />
            <Services {...props} />
            <hr />
            <Industries {...props} />
            <hr />
            <ProjectLifeCycle {...props} />
            <hr />
            <OurClients {...props} />
            <hr />
            <GetInTouchWithUs {...props} />
            <hr />
            <OurTopNotch />
            <hr />
            <WhyChoosingUs />
            <hr />
            <OurBlog />
        </>
    )
}

export default Home
