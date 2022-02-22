import React from "react";
import styles from "../styles/About.module.css";

const AboutCards = () => {
  return (
    <div className={styles.aboutCard}>
      <h1>Our Core Strengths</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/images/fast.png" alt="Our core strengths" />
          </div>
          <div className={styles.cardText}>
            <h3>Fast</h3>
            <p>Receive your tax return in less than 7 days</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/images/fast.png" alt="Our core strengths" />
          </div>
          <div className={styles.cardText}>
            <h3>Fast</h3>
            <p>Receive your tax return in less than 7 days</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/images/fast.png" alt="Our core strengths" />
          </div>
          <div className={styles.cardText}>
            <h3>Fast</h3>
            <p>Receive your tax return in less than 7 days</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/images/fast.png" alt="Our core strengths" />
          </div>
          <div className={styles.cardText}>
            <h3>Fast</h3>
            <p>Receive your tax return in less than 7 days</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutCards;
