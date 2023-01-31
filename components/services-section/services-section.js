import React from "react";
import ServicesList from "../services-list/services-list";
import styles from './services-section.module.scss';
import ServicesListPackages from "../services-list-packages/services-list-packages";

const ServicesSection = () => {
    return (
        <div className={styles.services}>
            <div className={'line'}></div>
            <h3>Services</h3>
            <ServicesList></ServicesList>
            <h3>Full solutions</h3>
            <ServicesListPackages></ServicesListPackages>
        </div>
    );
}

export default ServicesSection;