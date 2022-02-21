import { useState } from "react";

function TaxForm2({nextBtn,prevBtn}) {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  return (
    <div className="container py-5 ">
      <div>
          <label htmlFor="radioBtn">Please select your filing status</label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="Single"
            />
            <label class="form-check-label" for="radio1">
              Single
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="Married filing jointly"
            />
            <label class="form-check-label" for="radio2">
              Married filing jointly
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio3"
              name="optradio"
              value="Head of household"
            />
            <label class="form-check-label" for="radio3">
              Head of household
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio4"
              name="optradio"
              value="Married filing seperately"
            />
            <label class="form-check-label" for="radio4">
              Married filing seperately
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio5"
              name="optradio"
              value="Qualifying widow(er)"
            />
            <label class="form-check-label" for="radio5">
              Qualifying widow(er)
            </label>
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="question">
              Were you separated or divorced during the year?
            </label>
            <select className="form-select" id="question" name="question">
              <option> Please Select</option>
              <option>Seperated</option>
              <option>Divorced</option>
            </select>
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="question">
              Have you received any notice from the IRS in the past year?
            </label>
            <select className="form-select" id="question" name="question">
              <option>Please Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="question">
              Are you behind on student loans or child support?
            </label>
            <select className="form-select" id="question" name="question">
              <option>Please Select</option>
              <option>Student Loan</option>
              <option>Child Support</option>
            </select>
          </div>
          <div>
            <label className="form-check-label" for="num">
              How many dependents will you be claiming?
            </label>
            <input
              type="text"
              className="form-control py-2"
              id="num"
              name="num"
            />
          </div>
          <div className="d-flex">
            <button type="button" onClick={ prevBtn} className="btn mt-5 w-25  me-4 outline-none border border-2 border-dark">
              Previous
            </button>
            <button type="button" className="btn-green mt-5 w-25" onClick={nextBtn}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
}
export default TaxForm2;
