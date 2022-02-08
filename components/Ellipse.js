import React from 'react';
import styles from "../styles/Estimate.module.css";

const Ellipse = ({active}) => {

  const [isActive, setIsActive] = React.useState(active);

  // if (isActive) {
  //   styles.ellipse.color = 'red';
  // } else {
  //   styles.ellipse.backgroundColor = '#c4c4c4';
  // }


  return (
    <div className={styles.ellipse}></div>
  );
};

export default Ellipse;
