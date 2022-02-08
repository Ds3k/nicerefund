import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Estimate.module.css";

const Estimate1 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Taxpayer</Form.Label>
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

      <Button className={styles.button} type="submit">
        Next
      </Button>
    </Form>
  );
};

export default Estimate1;
