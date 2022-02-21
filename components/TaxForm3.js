import { useState } from "react";

function TaxForm3({nextBtn, prevBtn}) {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  return (
    <div className="container py-5 ">
      <div>
          <label htmlFor="radioBtn">
            Did you have health insurance for the entire year?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio3"
              name="optradio"
              value="maybe"
            />
            <label class="form-check-label" for="radio3">
              Partially
            </label>
          </div>
          <label htmlFor="radioBtn">
            Did you have insurance through the Marketplace?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes *please include 1095-A with your submission*
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio3"
              name="optradio"
              value="maybe"
            />
            <label class="form-check-label" for="radio3">
              Not sure
            </label>
          </div>
          <label htmlFor="radioBtn">
            Were you or any of your dependents in college last year?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes *please include 1095-A with your submission*
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>

          <div>
            <label className="form-check-label" for="num">
              Enter the amount, if any, of the first economic stimulus payment
              issued (April 2020).*
            </label>
            <input
              type="text"
              className="form-control py-2"
              id="num"
              name="num"
            />
          </div>
          <div>
            <label className="form-check-label" for="num">
              Enter the amount, if any, of the second economic stimulus payment
              issued (December 2020).*
            </label>
            <input
              type="text"
              className="form-control py-2"
              id="num2"
              name="num"
            />
          </div>

          <label htmlFor="radioBtn">
            Did you receive unemployment benefits?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>

          <label htmlFor="radioBtn">
            Did you withdraw from a retirement account?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>

          <label htmlFor="radioBtn">
            Did you have any major purchases, such as a car or home?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>

          <label htmlFor="radioBtn">
            Did you own a home and pay taxes and/or interest?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>

          <label htmlFor="radioBtn">
            Do you own a business or an interest in a partnership?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>

          <label htmlFor="radioBtn">
            Did you acquire any financial interest in any virtual currency
            (e.g., Bitcoin)?
          </label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Yes 
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="no"
            />
            <label class="form-check-label" for="radio2">
              No
            </label>
          </div>
          <div className="d-flex">
            <button
              type="button"
              className="btn mt-5 w-25  me-4 outline-none border border-2 border-dark"
              onClick={prevBtn}
            >
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
export default TaxForm3;
