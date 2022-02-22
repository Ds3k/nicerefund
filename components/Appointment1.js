import { Form, Button } from "react-bootstrap";
import styles from "../styles/Estimate.module.css";
import TaxPreparer from "../components/TaxPreparer";
import Ellipse from "../components/Ellipse";

const Appointment1 = () => {
  return (
    <>
      <div className={styles.ellipseGroup}>
        <Ellipse active />
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
        <div>Select Tax Preparer</div>
        <div className={styles.prepContainer}>
          <TaxPreparer
            imageSrc={"https://via.placeholder.com/300"}
            preparer={"John Doe"}
          />
          <TaxPreparer
            imageSrc={"https://via.placeholder.com/300"}
            preparer={"John Doe"}
          />
          <TaxPreparer
            imageSrc={"https://via.placeholder.com/300"}
            preparer={"John Doe"}
          />
        </div>
      </Form>
    </>
  );
};

export default Appointment1;
