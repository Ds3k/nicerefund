import { useState } from "react";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      image: "/images/lady.jpg",
      title: "Heathier Lewis",
      desc: "I have conducted business with Mr. Ladejobi for over six years. He not only provided a great service at a reasonable cost, but she was professional, provided me a great outcome, and explained every detail of his work. In doing business with him he has proven to be a very hard worker, dedicated, and trustworthy businessman. I have and will continue to recommend Tito Ladejobi for any financial servicing.",
    },
    {
      image: "/images/lady3.png",
      title: "Seriki Abdulhakeem",
      desc: "I have conducted business with Mr. Alade for over ten years. He not only provided a great service at a reasonable cost, but he was professional, provided me a great outcome, and explained every detail of his work. In doing business with him he has proven to be a very hard worker, dedicated, and trustworthy businessman..",
    },
  ];

  const { desc } = data[selected];
  return (
    <div className="testimonial">
      <div className="container">
        <h1 className="text-center"> Testimonials </h1>
        <div className="flex mt-5">
          <div className="flex-item">
            <div className="list">
              {data.map((d, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setSelected(i)}
                    className={
                      selected === i
                        ? "list-item mb-4 active"
                        : "list-item mb-4"
                    }
                  >
                    <img src={d.image} alt="woman-standing" className="img" />
                    <p className="ms-3">{d.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-item">
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
