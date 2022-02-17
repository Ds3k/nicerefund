import { Form, Button } from "react-bootstrap";
import styles from "../styles/Estimate.module.css";
import Ellipse from "../components/Ellipse";

const Appointment2 = () => {
  return (
    <>
      <div className={styles.ellipseGroup}>
        <Ellipse active={true} />
        <Ellipse active={true} />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className={styles.formGrid}>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control type="date" />
            <Form.Control type="time" />
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

export default Appointment2;
