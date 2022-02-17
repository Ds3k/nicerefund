import { Form, Button } from "react-bootstrap";
import styles from "../styles/Estimate.module.css";
import Ellipse from "../components/Ellipse";

const Estimate2 = () => {

  return (
    <>
      <div className={styles.ellipseGroup}>
        <Ellipse active />
        <Ellipse active />
        <Ellipse />
      </div>
      <Form>
        <Form.Group>
          <Form.Label className={styles.header}>
            Please select your filing status
          </Form.Label>
          <Form.Check
            name="filing-type"
            label="Single"
            type="radio"
            className="mb-3"
          />
          <Form.Check
            name="filing-type"
            label="Married Filing Jointly"
            type="radio"
            className="mb-3"
          />
          <Form.Check
            name="filing-type"
            label="Married Filing Seperately"
            type="radio"
            className="mb-3"
          />
          <Form.Check
            name="filing-type"
            label="Head of Household"
            type="radio"
            className="mb-3"
          />
          <Form.Check
            name="filing-type"
            label="Qualify window(er)"
            type="radio"
            className="mb-3"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className={styles.header}>
            How many dependants will you be claiming
          </Form.Label>
          <Form.Control className="w-50" type="number" placeholder="0" />
        </Form.Group>
      </Form>
    </>
  );
};

export default Estimate2;
