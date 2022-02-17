import { useState } from "react";
import Ellipse from "../components/Ellipse";
import TaxPreparer from "./TaxPreparer";
import styles from "../styles/Estimate.module.css";

const Estimate3 = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};

  return (
    <>
      <div className={styles.ellipseGroup}>
        <Ellipse active />
        <Ellipse active />
        <Ellipse active />
      </div>
      <label className={styles.fileLabel}>
        <input
          type="file"
          name="file"
          className={styles.fileInput}
          onChange={changeHandler}
        />
        {isFilePicked ? (
          <div>{selectedFile.name}</div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p>Upload</p>
            <div className={styles.buttonPrimary} type="submit">
              Select files
            </div>
          </div>
        )}
      </label>

      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in KB: {selectedFile.size / 1000}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
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
    </>
  );
};

export default Estimate3;
