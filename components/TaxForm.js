import {useState} from "react";

function TaxForm({nextBtn}) {
   const [yes, setYes] = useState(false);
   const [no, setNo] = useState(false );
  return (
    <div className="container py-5 ">
      <div>
        <h1>Individual Income Tax Organizer</h1>
          <h5>Taxpayer</h5>
          <div className="d-flex">
            <div className="mb-4 mt-3 w-50 me-3">
              <label htmlFor="Fname">First Name</label>
              <input
                type="text"
                className="form-control py-2"
                id="Fname"
                placeholder="Enter First Name..."
                name="Fname"
              />
            </div>
            <div className="mb-4 mt-3 w-50">
              <label htmlFor="Lname">Last Name</label>
              <input
                type="text"
                className="form-control py-2"
                id="Lname"
                placeholder="Enter Last Name..."
                name="Lname"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="suffix">Suffix</label>
            <select className="form-select" id="suffix" name="suffix">
              <option>Suffix</option>
              <option>2</option>
            </select>
          </div>
          <div className="d-flex">
            <div className="mb-4 mt-3 w-50 me-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="Enter Email...."
                name="email"
              />
            </div>
            <div className="mb-4 mt-3 w-50">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="tel"
                className="form-control py-2"
                id="phoneNumber"
                placeholder="Enter Phone Number...."
                name="phoneNumber"
              />
            </div>
          </div>

          {/* Address */}

          <h5>Address</h5>
          <div className="d-flex">
            <div className="mb-4 mt-3 w-50 me-3">
              <label htmlFor="address">Address line 1</label>
              <input
                type="text"
                className="form-control py-2"
                id="address"
                placeholder="Enter Your Address...."
                name="address"
              />
            </div>
            <div className="mb-4 mt-3 w-50">
              <label htmlFor="address2">Address line 2</label>
              <input
                type="text"
                className="form-control py-2"
                id="address2"
                placeholder="Enter Your Other Address..."
                name="address2"
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="mb-4 mt-3 w-50 me-3">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control py-2"
                id="city"
                placeholder="Enter City Name...."
                name="city"
              />
            </div>
            <div className="mb-4 mt-3 w-50">
              <label htmlFor="state">State</label>
              <select className="form-select py-2" id="state" name="state">
                <option>Lagos</option>
                <option>Portharcourt</option>
              </select>
            </div>
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="email">Zip Code</label>
            <input
              type="text"
              className="form-control py-2"
              id="text"
              placeholder="Zip Code"
              name="text"
            />
          </div>
          <div>
            <label htmlFor="radioButton">
              {" "}
              Are you new to Nice refund services?{" "}
            </label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio1"
                name="optradio"
                value="Yes"
                onClick={() => setYes(!yes)}
              />
              <label className="form-check-label" for="radio1">
                yes
              </label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="optradio2"
                value="No"
                onClick={() => setNo(!no)}
              />
              <label className="form-check-label" for="radio2">
                No
              </label>
            </div>
            {yes && (
              <div className="mb-4 mt-3">
                <label htmlFor="email">
                  What year did you file last with us
                </label>
                <select className="form-select" id="suffix" name="suffix">
                  <option>2019</option>
                  <option>2020</option>
                </select>
              </div>
            )}
            {no && (
              <>
                <div className="d-flex">
                  <div className="mb-4 mt-3 w-50 me-3">
                    <label htmlFor="number"> Social security number</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      id="number"
                      placeholder="Enter Security Number...."
                      name="number"
                    />
                  </div>
                  <div className="mb-4 mt-3 w-50">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                      type="text"
                      className="form-control py-2"
                      id="occupation"
                      placeholder="Enter Last Name..."
                      name="occupation"
                    />
                  </div>
                </div>
                <div className="mb-4 mt-3 w-50">
                  <label htmlFor="date">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control py-2"
                    id="date"
                    placeholder="Enter Date of Birth...."
                    name="date"
                  />
                </div>
              </>
            )}
          </div>
          <button type="submit" className="btn-green mt-5  w-100" onClick={nextBtn}>
            Next
          </button>
      </div>
    </div>
  );
}
export default TaxForm;
