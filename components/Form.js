import TaxForm from "./TaxForm";
import TaxForm2 from "./TaxForm2";
import TaxForm3 from "./TaxForm3";
import TaxForm4 from "./TaxForm4";
import TaxForm6 from "./TaxForm6";
import { useState } from "react";

function Form() {
  const [page, setPage] = useState(1);
  const nextBtn = () => {
    setPage((cur) => cur + 1);
  };
  const prevBtn = () => {
    setPage((cur) => cur - 1);
  };
  return (
    <form className="mt-4">
      <div className="circles d-flex justify-content-center align-items-center">
        <span className={page === 1 ? "circle active" : "circle"}></span>
        <span className={page === 2 ? "circle active" : "circle"}></span>
        <span className={page === 3 ? "circle active" : "circle"}></span>
        <span className={page === 4 ? "circle active" : "circle"}></span>
      </div>
      {page === 1 && <TaxForm nextBtn={nextBtn} />}
      {page === 2 && <TaxForm2 nextBtn={nextBtn} prevBtn={prevBtn} />}
      {page === 3 && <TaxForm3 nextBtn={nextBtn} prevBtn={prevBtn} />}
      {page === 4 && <TaxForm4 nextBtn={nextBtn} prevBtn={prevBtn} />}
      {page === 5 && <TaxForm6 />}
    </form>
  );
}

export default Form;
