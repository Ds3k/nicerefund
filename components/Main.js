import Link from "next/link";
import Testimonials from "./Testimonials";
import News from './News'

function Main() {
  return (
    <main className="main">
      <div className="container-fluid p-0  hero-wrapper">
        <div className="row">
          <img
            src="/images/bgImage.png"
            alt="hero-image"
            className="hero-image"
          />
          <div className="text-overlay">
            <h6 className="overlay-head">
              Let our experts estimate your tax refunds for you.
            </h6>
            <p className="overlay-para mt-5">
              Get a quick estimate of your refund
            </p>
            <button className="btn text-uppercase">get started</button>
          </div>
        </div>
      </div>
      <div className="container card-container ">
        <div className="row">
          <div className="cards-wrapper">
            <div className="card-item">
              <h1> Estimate refunds yourself </h1>
              <p className="para mt-2">
                you can also choose to do your tax return estimate yourself, the
                process is easy and straight forward. Our expert would help you
                double check after you are done.
              </p>
              <div className="mt-5">
                <a href="/" className="Link">
                  {" "}
                  get started{" "}
                </a>
              </div>
            </div>
            <div className="card-item">
              <h1> Request tax return </h1>
              <p className="para mt-2">
                file to receive your refunds from a previous tax year
              </p>
              <div className="mt-5">
                <a className="Link" href="/">
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment-container">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-6">
              <h1 className="head"> Schedule an appointment </h1>
              <p className="para mt-2">
                Have a phone or physcial appointment with one of our recognized
                IRS expert
              </p>
              <button className="button-outline mt-4"> schedule </button>
            </div>
            <div className="col-md-5">
              <img
                src="/images/Appointments-booking-removebg.png"
                alt=""
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <News />
    </main>
  );
}

export default Main;
