import { useState } from "react";

function Questions({faq}) {
    const [icon, setIcon] = useState(false);
  return (
    <div className="list-item mb-3 " key={faq.id}>
      <div className="d-flex justify-content-between align-items-center px-3">
        <h6> {faq.question} </h6>
        <span className="icon" onClick={() => setIcon(!icon)}>
          {icon ? "-" : "+"}
        </span>
      </div>
      {icon && <div className="my-4 answer"> {faq.answer} </div>}
    </div>
  );
}

export default Questions;
