import React from "react";
import styles from "../styles/News.module.css";

const NewsGrid = () => {
  return (
    <div>
      <div className="container p-4">
        <div className={styles.cardContainer}>
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

          <a href="read" className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/images/news.png" alt="" />
            </div>
            <h2>Title</h2>
            <p>Text</p>
            <a href="#">Read More</a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
