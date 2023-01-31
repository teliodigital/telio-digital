import React from "react";
import Navigation from "../navigation/navigation";

const Layout = ({children}) => {
    return (
        <div>
            {/*<Navigation></Navigation>*/}
            <main>{children}</main>
        </div>
    )
}

export default Layout