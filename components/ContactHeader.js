import React from "react";
import styles from "../styles/Contact.module.css";

const ContactHeader = () => {
    return (
      <>
        <div className={styles.contactHeader}>
            <img src="/images/contact.png" alt="" />
            <h1>CONTACT US</h1>
        </div>
      </>
      );
  };
  
  export default ContactHeader;