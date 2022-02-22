import React from "react";
import styles from "../styles/TaxPreparer.module.css";

const TaxPreparer = ({imageSrc, preparer}) => {
  return (
    <>
        <div className={styles.card}>
          <img src={imageSrc} alt="Tax Preparer" />
            <div className={styles.container}>
              <p>{preparer}</p>
            </div>
        </div>
    </>
  );
};

export default TaxPreparer;
