import React from 'react';
import styles from "../styles/Estimate.module.css";

const Ellipse = ({active}) => {

  return (
    <div className={active === true ? styles.ellipseActive : styles.ellipseInert}></div>
  );
};

export default Ellipse;
