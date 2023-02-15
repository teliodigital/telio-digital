import React from 'react';
import ContactLanding from "../@features/contact/contact";
import Soon from "../@features/soon/soon";
import {AppWrap} from "../@core/wrapper";

const COMPONENT_ID = 'contact'


const Contact = () => {
    return (
        <div>
            <ContactLanding></ContactLanding>
            <Soon></Soon>
        </div>
    )
}

export default AppWrap(Contact, COMPONENT_ID);