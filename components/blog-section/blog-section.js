import React from "react";
import styles from "./blog-section.module.scss";

const BlogSection = () => {

    function handleRedirectToBlog() {
        
    }

    return (
        <div className={styles.blog}>
            <div className={'line'}></div>
            <div className={styles.blog__content}>
                <div>
                    <h3>Blog</h3>
                    <p>Here you can find some of my latest posts</p>
                </div>
                <div>
                    <button onClick={() => handleRedirectToBlog()} className={'main__button'}>Check more</button>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;