import {AppWrap} from "../core/wrapper";
import Landing from "../components/landing/landing";
import Visions from "../components/visions/visions";
import ServicesSection from "../components/services-section/services-section";
import CaseStudiesSection from "../components/case-studies-section/case-studies-section";
import BlogSection from "../components/blog-section/blog-section";
import Soon from "../components/soon/soon";

const COMPONENT_ID = 'Home'

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            {/*<Visions></Visions>*/}
            {/*<ServicesSection></ServicesSection>*/}
            {/*<CaseStudiesSection></CaseStudiesSection>*/}
            {/*<BlogSection></BlogSection>*/}
            <Soon></Soon>
        </div>
    )
}

export default AppWrap(Home, COMPONENT_ID)