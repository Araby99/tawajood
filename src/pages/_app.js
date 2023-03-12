import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import Layout from './Layout';
import '../styles/global.css'
import '../styles/fonts.css'
import Head from 'next/head';
import axios from 'axios';
import Spinner from 'components/Spinner';

const App = ({ Component, pageProps }) => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('/api')
            .then(function (response) {
                setData(response.data)

            })
    }, [])
    const [mode, setMode] = useState("light");
    const toggleMode = () => setMode((mode) => mode == "light" ? "dark" : "light");
    const [lang, setLang] = useState("en");
    const changeLang = (lang) => setLang(lang)
    const navHeight = useRef()
    const [style, setStyle] = useState();
    if (data == undefined) {
        return (
            <Spinner />
        )
    }
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/images/logo/logo-dark.png" />
            </Head>
            <Layout style={style} setStyle={setStyle} navHeight={navHeight} mode={mode} toggleMode={toggleMode} lang={lang} changeLang={changeLang}>
                <Component style={style} navHeight={navHeight} data={data} mode={mode} toggleMode={toggleMode} lang={lang} changeLang={changeLang} {...pageProps} />
            </Layout>
        </>
    )
}

export default App;