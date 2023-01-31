import React, {useEffect, useState} from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import Link from "next/link";
import client from "../../constant-data/sanity-connect.data";
import styles from './service-list.module.scss';

const ServicesList = () => {
    const [services, setServices] = useState([]);
    const query = `*[_type == "service"] | order(_createdAt desc) {title,slug {current}}`

    useEffect(() => {
        client.fetch(query).then((data) => {
            const services = data.map((service) => {
                return {
                    title: service.title,
                    url: `/services/${service.slug.current}`
                }
            })
            setServices(services);
        })
    }, []);

    return (
        <div className={styles.list}>
            {
                services && services.map((service, index) => (
                    <Link key={index} href={`${service.url}`}>
                        <div className={styles.list__box}>
                            <h1>{service.title}</h1>
                            <span>
                                <HiArrowNarrowRight></HiArrowNarrowRight>
                            </span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ServicesList