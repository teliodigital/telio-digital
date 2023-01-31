import React from 'react'
import { SocialsData } from '../../constant-data/socials.data'
import styles from './socials.module.scss'

const Socials = () => {
    return (
        <div className={styles.socials}>
            <ul>
                {SocialsData.map((social, index) => {
                    return (
                        <li key={index}>
                            <a target={'_blank'} referrerPolicy={'no-referrer'} href={social.url}>
                                <social.icon></social.icon>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Socials