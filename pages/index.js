import {AppWrap} from "../@core/wrapper";
import Landing from "../@features/landing/landing";
import Soon from "../@features/soon/soon";

const COMPONENT_ID = 'home'

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Soon></Soon>
        </div>
    )
}

export default AppWrap(Home, COMPONENT_ID)