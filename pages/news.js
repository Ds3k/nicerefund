import React from "react";
import Head from "next/head";
import styles from "../styles/News.module.css";
import NewsGrid from "../components/NewsGrid";


const news = () => {
  return (
    <div className="container p-2">
        <Head>
          <title>News Page</title>
          <meta name="description" content="Handles "/>
        </Head>
        <NewsGrid/>
        <a href="#" className={styles.more}>See more</a>
    </div>
  );
};

export default news;
