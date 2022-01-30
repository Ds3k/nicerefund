import React from 'react';
import styles from "../styles/News.module.css";

const MoreNews = () => {
  return (
  <div className="d-flex">
        <a href="read" className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/images/news.png" alt="" />
            </div>
            <h2>Title</h2>
            <p>Text</p>
        </a>

        <a href="read" className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/images/news.png" alt="" />
            </div>
            <h2>Title</h2>
            <p>Text</p>
        </a>

        <a href="read" className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/images/news.png" alt="" />
            </div>
            <h2>Title</h2>
            <p>Text</p>
        </a>
  </div>
  );
};

export default MoreNews;
