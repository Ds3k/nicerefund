import React from 'react';
import styles from "../styles/Contact.module.css";
import {MdLocationOn, MdPhone, MdEmail}  from "react-icons/md";

const ContactMenu = () => {
  return (
    <div>
        <div className={styles.menuContainer}>
            <div className={styles.contactMenu}>
                <div className={styles.contactMenuItem}>
                    <MdLocationOn className={styles.contactMenuIcon}/>
                    <p>6201 Bonhomme Rd Ste 150N,<br/>Houston, Texas 77036</p>
                </div>
                <div className={styles.contactMenuItem}>
                    <MdPhone className={styles.contactMenuIcon}/>
                    <p>+1 (713) 900-8990</p>
                </div>
                <div className={styles.contactMenuItem}>
                    <MdEmail className={styles.contactMenuIcon}/>
                    <p>info@nicerefund.com</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ContactMenu;
