import React from "react";
import { Form, Button } from "react-bootstrap";
import Ellipse from "../components/Ellipse";
import styles from "../styles/Estimate.module.css";

const Estimate1 = () => {
  return (
    <>
      <div className={styles.ellipseGroup}>
        <Ellipse active/>
        <Ellipse />
        <Ellipse />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Taxpayer</Form.Label>
          <div className={styles.formGrid}>
            <Form.Control type="text" placeholder="First Name" />
            <Form.Control type="text" placeholder="Last Name" />
            <Form.Control type="email" placeholder="Email" />
            <Form.Control type="number" placeholder="Phone Number" />
          </div>

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default Estimate1;
