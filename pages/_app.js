import '../styles/globals.scss'
import Layout from "../@core/layout/layout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
