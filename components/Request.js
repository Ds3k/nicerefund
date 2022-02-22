import React from "react";

function Request() {
  return (
    <div className="container py-5">
      <div>
        <h1>Request Tax Return</h1>
        <form className="mt-4 form">
          <div className="d-flex justify-content-between">
            <div className="mb-4 mt-3 ">
              <label htmlFor="Fname">
                First Name <span>*</span>{" "}
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="Fname"
                placeholder="Enter First Name...."
                name="Fname"
              />
            </div>
            <div className="mb-4 mt-3">
              <label htmlFor="Lname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="Lname"
                placeholder="Enter Last Name...."
                name="Lname"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="suffix">Suffix*</label>
            <select class="form-select" id="suffix" name="suffix">
              <option>Suffix</option>
              <option>2</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <div>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="Password"
                name="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="radioButtons">
              Filling Status <span>*</span>
            </label>
            <p>
              Please select your filing status on your most recently filed tax
              return
            </p>
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
          </div>

          <div className="mt-4">
            <label htmlFor="checkbox">
              Please choose tax year(s)<span>*</span>
            </label>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check1"
                name="option1"
                value="2012"
              />
              <label class="form-check-label" for="check1">
                2012
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check2"
                name="option2"
                value="2013"
              />
              <label class="form-check-label" for="check2">
                2013
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check3"
                name="option3"
                value="2014"
              />
              <label class="form-check-label" for="radio3">
                2014
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check4"
                name="option4"
                value="2015"
              />
              <label class="form-check-label" for="radio4">
                2015
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check5"
                name="option5"
                value="2015"
              />
              <label class="form-check-label" for="radio5">
                2016
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check6"
                name="option6"
                value="2016"
              />
              <label class="form-check-label" for="radio6">
                2016
              </label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="check7"
                name="option7"
                value="2017"
              />
              <label class="form-check-label" for="radio7">
                2017
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="mb-4 mt-3 ">
              <label htmlFor="Fname">
                First Name <span>*</span>{" "}
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="Fname"
                placeholder="Enter First Name...."
                name="Fname"
              />
            </div>
            <div className="mb-4 mt-3">
              <label htmlFor="Lname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="Lname"
                placeholder="Enter Last Name...."
                name="Lname"
              />
            </div>
          </div>
          <div>
            <label htmlFor="captcha">
              Captcha <span>*</span>
            </label>
            <div
              className="preview my-3 w-50 p-3 rounded fs-2 text-white fst-italic"
              style={{ background: "#047727" }}
            >
              {" "}
              567890-p{" "}
            </div>
            <input
              type="text"
              className="form-control w-50 px-4 py-3"
              id="captcha"
              name="captcha"
            />
          </div>
          <button type="submit" className="btn mt-5  w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Request;
