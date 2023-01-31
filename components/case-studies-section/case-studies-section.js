import React from "react";
import styles from "./case-studies-section.module.scss";
import client from "../../constant-data/sanity-connect.data";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const CaseStudiesSection = () => {
    const [mainStudies, setMainStudies] = React.useState([]);
    const [otherStudies, setOtherStudies] = React.useState([]);
    
    const imgBuilder = imageUrlBuilder(client);
    
    React.useEffect(() => {
        const query = `*[_type == "case_study"] | order(_createdAt desc) {title,slug {current}, mainImage, preview}`
        
        client.fetch(query).then((data) => {
            const mainStudies = data.slice(0, 3);
            const otherStudies = data.slice(3, data.length);
            setMainStudies(mainStudies);
            setOtherStudies(otherStudies);
        })
    }, []);
    
    return (
        <div className={styles.caseStudies}>
            <div className={'line'}></div>
            <h3>Case studies</h3>
            <div className={styles.caseStudies__mainBox}>
                {
                    mainStudies && mainStudies.map((study, index) => (
                        <Link href={`case-studies/${study.slug.current}`} key={index}>
                            <div className={styles.caseStudies__mainBox__box}>
                                <img src={imgBuilder.image(study.mainImage)} alt=""/>
                                <div className={styles.caseStudies__mainBox__box__content}>
                                    <h1>{study.title}</h1>
                                    <p>{study.preview}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={styles.caseStudies__secondBox}>
                {
                    otherStudies && otherStudies.map((study, index) => (
                        <div key={index} className={styles.caseStudies__secondBox__box}>
                            <h1>{study.title}</h1>
                            <p>{study.preview}</p>
                            <Link href={`case-studies/${study.slug.current}`}>Read more here</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CaseStudiesSection;