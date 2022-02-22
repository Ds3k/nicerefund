import { useState } from "react";
import Head from "next/head";
import Estimate1 from "../../components/Estimate1";
import Estimate2 from "../../components/Estimate2";
import Estimate3 from "../../components/Estimate3";
import styles from "../../styles/Estimate.module.css";
import { Button } from "react-bootstrap";

export default function EstimateHome() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Head>
        <title>Quick Estimate</title>
        <meta name="description" content="Handles " />
      </Head>
      <div className="container-fluid p-4">
        <header className={styles.header}>
          Individual Income Tax Organizer
        </header>
        {page === 0 && <Estimate1 />}
        {page === 1 && <Estimate2 />}
        {page === 2 && <Estimate3 />}
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
            if (page === 2) {
              alert("Form Submitted");
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === 2 ? "Done" : "Next"}
        </Button>
      </div>
    </>
  );
}
