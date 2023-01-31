import React from 'react';
import Socials from "../socials/socials";
import styles from './landing.module.scss';

const Landing = () => {
    return (
        <section className={styles.landing}>
            {/*<div>*/}
            {/*    <Socials></Socials>*/}
            {/*</div>*/}
            <div className={styles.landing__content}>
                <div className={'line'}></div>
                <h1>Digital Business <span>Solutions</span></h1>
                {/*<button className={'main__button'}>Getting Started</button>*/}
            </div>
        </section>
    )
}

export default Landing