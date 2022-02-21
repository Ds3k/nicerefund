function TaxForm4({nextBtn,prevBtn}) {
  return (
    <div className="container py-5 ">
      <div>
          <div className="mb-4 mt-3">
            <label htmlFor="question">
              How would you like to recieve your payments?
            </label>
            <select className="form-select" id="question" name="question">
              <option>Direct Deposit</option>
              <option>Child Support</option>
            </select>
          </div>

          <label htmlFor="radioBtn">Account Type</label>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="yes"
            />
            <label class="form-check-label" for="radio1">
              Checking
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
              Savings
            </label>
          </div>
          <div className="d-flex">
            <div className="mb-4 mt-3 w-50 me-3">
              <label htmlFor="Fname">Routing Number</label>
              <input
                type="text"
                className="form-control py-2"
                id="Fname"
                placeholder="Please Enter your Routing number"
                name="Fname"
              />
            </div>
            <div className="mb-4 mt-3 w-50">
              <label htmlFor="Lname">Account number</label>
              <input
                type="text"
                className="form-control py-2"
                id="Lname"
                placeholder="Please Enter Account Number"
                name="Lname"
              />
            </div>
          </div>
          <div className="d-flex">
            <button
              type="button"
              className="btn mt-5 w-25  me-4 outline-none border border-2 border-dark"
              onClick={prevBtn}
            >
              Previous
            </button>
            <button type="button" className="btn-green mt-5 w-25"onClick={nextBtn}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
}
export default TaxForm4;
