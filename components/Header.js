import { useState } from "react";
import { ROUTES } from "./Constant";
import Link from 'next/link'

import { useRouter } from "next/router";
function Header() {
  const router = useRouter()
  const [list, setList] = useState(false);
  return (
    <div className="container-fluid  py-2 nav-wrapper">
      <div className="row">
        <div className="navbar position-relative px-sm-5">
          <Link href="/" className="logo-wrapper">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <div className="list-wrapper">
            <ul className={list ? "list active" : "list"}>
              {ROUTES?.map(({ title, link }, index) => {
                const href = link === "/" ? "/" : `/${link}`;
                return (
                  <li className="list-item" key={index}>
                    <Link href={href}>
                      <a
                        className={router.asPath === href ? 'link active' : "link"}
                      >
                        <span className="ms-2">{title}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
              {/* <li className="list-item"> <a href="">Home</a> </li>
              <li className="list-item"> <a href="">About</a> </li>
              <li className="list-item"> <a href="">FAQS</a> </li>
              <li className="list-item"> <a href="">News</a> </li>
              <li className="list-item"> <a href="">Contact</a> </li> */}
              <span className="close-btn" onClick={() => setList(false)}>
                {" "}
                X{" "}
              </span>
            </ul>
          </div>
          <button className="btn-green text-uppercase">
            {" "}
            estimate refunds{" "}
          </button>
          <svg
            onClick={() => setList(!list)}
            className="hamburger"
            width="19"
            height="12"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.61905 12H0.619049V10H9.61905V12ZM18.619 7H0.619049V5H18.619V7ZM18.619 2H9.61905V0H18.619V2Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
