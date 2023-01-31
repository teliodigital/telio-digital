import React from "react";
import Link from "next/link";
import styles from './navigation.module.scss';

const Navigation = () => {

    return (
        <nav className={styles.bar}>
            <h3>Telio <span>Digital</span></h3>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About & <span>Team</span></a></Link>
                </li>
                <li>
                    <Link href="/case-studies"><a>Case studies</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation