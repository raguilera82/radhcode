import { RichText } from "prismic-reactjs";
import { Layout } from "../components";
import { Client } from "../utils/prismicHelpers"

const AboutPage = ({ doc, menu, locale }) => {
    return (
        <>
            <Layout
                altLangs={doc.alternate_languages}
                lang={doc.lang}
                menu={menu}
            >
                <p>Locale: {locale}</p>
                {RichText.render(doc.data.introduction) || []}

            </Layout>

        </>
    )
}

export const getStaticProps = async (props) => {
    console.log(props)
    const client = Client();
    const doc = await client.getSingle('about_page', { lang: props.locale })
    const menu = await client.getSingle('top_menu', { lang: props.locale })
    return {
        props: {
            locale: props.locale,
            doc,
            menu
        }
    }
}

export default AboutPage;