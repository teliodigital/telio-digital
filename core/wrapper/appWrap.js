import React from 'react'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`appContainer ${classNames}`}>
            <div>
                <Component />
            </div>
        </div>
    )
}

export default AppWrap;