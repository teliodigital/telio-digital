import React from 'react';
import {vision} from "../../constant-data/vision.data";
import styles from './visions.module.scss';

const Visions = () => {
    return (
        <section className={styles.visions}>
            {vision.map((item, index) => (
                <div className={styles.visions__box} key={index}>
                    <item.icon></item.icon>
                    <div className={'line'}></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Visions