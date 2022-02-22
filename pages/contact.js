import Head from "next/head";
import ContactForm from "../components/ContactForm";
import ContactHeader from "../components/ContactHeader";
import ContactMenu from "../components/ContactMenu";
import styles from "../styles/Contact.module.css";

export default function About() {
  return (
    <>
        <Head>
          <title>Contact Page</title>
          <meta name="description" content="Handles "/>
        </Head>
        <>
            <ContactHeader/>
            <div className={styles.container}>
            {/* <h1>Get In Touch!</h1>
            <p>Contact us for any questions or concerns you may have.</p> */}
            <ContactMenu/>
            <ContactForm />
            </div>
        </>
    </>
  );
}