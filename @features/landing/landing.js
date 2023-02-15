import React from 'react';
import styles from './landing.module.scss';
import Link from "next/link";

const Landing = () => {
    return (
        <section className={styles.landing}>
            <div className={styles.landing__content}>
                <div className={'line'}></div>
                <h1>Digital Business <span>Solutions</span></h1>
                <Link href={'contact'}>
                    <button className={'main__button'}>Contact</button>
                </Link>
            </div>
        </section>
    )
}

export default Landing;