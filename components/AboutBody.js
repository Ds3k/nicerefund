import React from "react";
import styles from "../styles/About.module.css";

const AboutBody = () => {
  return (
    <div>

      <section className={styles.aboutSection}>
            <div className={styles.aboutText}>
                <h3>Our team</h3>
                <p>
                    Our team of well informed preparers are 100% dedicated to our
                    clients. We are here to help, teach, plan and prepare you for all of
                    your annual income tax needs.
                </p>
            </div>
            <div className={styles.aboutImage}>
                <img src="/images/aboutTeam.png" alt="Our team" />
            </div>
      </section>

      <section className={styles.aboutSection}>
            <div className={styles.aboutImage}>
                <img src="/images/aboutService.png" alt="Our service" />
            </div>
            <div className={styles.aboutText}>
                <h3>Our services</h3>
                <p>
                    Our no pressure, FREE ESTIMATES and NO MONEY DOWN tax preparation
                    makes Nice Refund the best choice. AUDIT PROTECTION and FREE SECOND
                    LOOKS makes us the safe choice.
                </p>
            </div>
      </section>
    </div>
  );
};

export default AboutBody;
