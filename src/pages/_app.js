import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Layout from './Layout';
import '../styles/global.css'
import '../styles/fonts.css'
import Head from 'next/head';
const App = ({ Component, pageProps }) => {
    const [mode, setMode] = useState("light");
    const toggleMode = () => setMode((mode) => mode == "light" ? "dark" : "light");
    const [lang, setLang] = useState("en");
    const changeLang = (lang) => setLang(lang)

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/images/logo/logo-dark.png" />
            </Head>
            <Layout mode={mode} toggleMode={toggleMode} lang={lang} changeLang={changeLang}>
                <Component mode={mode} toggleMode={toggleMode} lang={lang} changeLang={changeLang} {...pageProps} />
            </Layout>
        </>
    )
}

export default App;