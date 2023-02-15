import React, {useEffect, useState} from "react";
import styles from "./contact.module.scss";

const ContactLanding = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('Web Development');
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        alert('The side is under development. The form will not submit any data.');
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = {
            name,
            email,
            subject,
            message
        }
        
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    
    return (
        <section className={styles.contact}>
            <div className={styles.contact__content}>
                <div className={'line'}></div>
                <h1>Contact</h1>
                <p>Feel free to contact us for any questions or inquiries.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.form__layout}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(event) => setName(event.target.value)} type="text" id="name" name="name" placeholder="Your name" />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <select value={subject} onChange={(event) => setSubject(event.target.value)} name="" id="">
                            <option value="Web Development">Web Development</option>
                            <option value="Brand & Design">Brand & Design</option>
                            <option value="SEO Services">SEO Services</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button className={'main__button'}>Send</button>
                </div>
                <div className={styles.form__layout}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="Your email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea value={message} onChange={(event) => setMessage(event.target.value)} id="message" name="message" placeholder="Your message"></textarea>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactLanding;