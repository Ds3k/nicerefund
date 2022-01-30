import React from "react";
import styles from "../styles/Contact.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <div className={styles.form}>
            <div className={styles.formLeft}>
            <input
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                placeholder="john.doe@email.com"
            />
            <input
                type="tel"
                name="tel"
                placeholder="+1 (713) 900-8990"
            />
            </div>
            <div className={styles.formRight}>
                <textarea
                    name="message"
                    placeholder="Message"
                />
            </div>
        </div>
        <button className={styles.submitButton}type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
