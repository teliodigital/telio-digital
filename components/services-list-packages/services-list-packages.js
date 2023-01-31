import React, {useEffect, useState} from "react";
import styles from './services-list-packages.module.scss';
import client from "../../constant-data/sanity-connect.data";
import imageUrlBuilder from "@sanity/image-url";

const ServicesListPackages = () => {
    const [packages, setPackages] = useState([]);
    const query = `*[_type == "package_service"] | order(_createdAt desc) {mainImage, description, title,slug {current}}`
    
    const imgBuilder = imageUrlBuilder(client);

    useEffect(() => {
        client.fetch(query).then((data) => {
            const packages = data.map((service) => {
                return {
                    title: service.title,
                    url: `/services/${service.slug.current}`,
                    mainImage: service.mainImage,
                    description: service.description
                }
            })
            setPackages(packages);
        })
    }, []);
    
    return (
        <div className={styles.packages}>
            {
                packages && packages.map((service, index) => (
                    <div key={index} className={styles.packages__box}>
                        <img src={imgBuilder.image(service.mainImage)} alt=""/>
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                        <button className={'main__button'}>See more information</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ServicesListPackages