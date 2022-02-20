import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main  from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="tax refund web app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <Main/>
    </div>
  );
}
