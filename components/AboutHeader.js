import React from "react";
import styles from "../styles/About.module.css";

const AboutHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heroImage}>
        <img src="/images/about.png" alt="" />
      </div>
      <div className={styles.heroText}>
          <h1>ABOUT NICE REFUND</h1>
          <p className={styles.heroTextBody}>
            We are a full-service income tax preparation firm based out of TX. We
            are friendly, affordable, experienced, and recognized by the Internal
            Revenue Service.
            Nice Refund Tax Service, Where Every Penny Counts!
            Known for being dedicated to providing exceptional service, our mission
            is giving you the best tax experience. With our MAXIMUM REFUND
            guarantee, we make sure your refund is… NICE!
            ”What if I’m not getting a refund?” No Problem! Staying current with new tax laws and best
            practices enables us to reduce your tax liability and help you get a
            nice refund.
          </p>
        </div>
    </div>
  );
};

export default AboutHeader;
