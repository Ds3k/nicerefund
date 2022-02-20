import React from "react";
import {useFormik} from "formik";

function SignIn() {
    const formik = useFormik({
      initialValues:{
          email:"",
          pswd:""
      },
      onSubmit: values => {
          console.log(values)
      }
    })

  return (
    <div className="container-fluid py-5">
      <div className="m-auto">
        <h1 className="text-center">Login to your account</h1>
        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="mb-4 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control py-2"
              id="email"
              placeholder="Username or Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pwd">Password:</label>
            <div className="position-relative">
              <input
                type="password"
                className="form-control py-2"
                id="pwd"
                placeholder="Password"
                name="pswd"
                onChange={formik.handleChange}
                value={formik.values.pswd}
              />
              <img src="/images/eye.png" alt="eye" className="position-absolute end-0 top-50 translate-middle" style={{width:20}}/>
            </div>
          </div>
          <div className="form-check mb-4">
            <label htmlFor="remember" className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" />{" "}
              Keep me signed in
            </label>
          </div>
          <button type="submit" className="btn  w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
