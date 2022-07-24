import {AppWrap} from "../core/wrapper";

const COMPONENT_ID = 'Home'

const Home = () => {
  return (
    <div>
      <h1>NEXT JS BoilerPlate</h1>
    </div>
  )
}

export default AppWrap(Home, COMPONENT_ID)