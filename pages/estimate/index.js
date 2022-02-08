import Head from "next/head";
import Ellipse from "../../components/Ellipse";
import Estimate1 from "../../components/Estimate1";
import styles from "../../styles/Estimate.module.css";

export default function EstimateHome() {
  return (
    <>
        <Head>
          <title>Quick Estimate</title>
          <meta name="description" content="Handles "/>
        </Head>
        <div className="container-fluid p-4">
          <header className={styles.header}>Individual Income Tax Organizer</header>
          <div className={styles.ellipseGroup}>
            <Ellipse active={true} />
            <Ellipse active={false} />
            <Ellipse active={false} />
          </div>
          <Estimate1/>
        </div>
    </>
  );
}