import { useState } from "react";
import Head from "next/head";
import Appointment from "../../components/Appointment1";
import Appointment2 from "../../components/Appointment2";
import styles from "../../styles/Estimate.module.css";
import { Button } from "react-bootstrap";


export default function AppointmentHome() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Head>
        <title>Schedule Appointment</title>
        <meta name="description" content="Handles" />
      </Head>
      <div className="container-fluid p-4">
        <header className={styles.header}>Schedule Appointment</header>
        {page === 0 && <Appointment />}
        {page === 1 && <Appointment2 />}
        <Button
          className={page === 1 ? styles.buttonOutline : "d-none"}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          "Prev"
        </Button>
        <Button
          className={styles.buttonPrimary}
          type="submit"
          onClick={() => {
            if (page === 1) {
              alert("Form Submitted");
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === 1 ? "Done" : "Next"}
        </Button>
      </div>
    </>
  );
}
