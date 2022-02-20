import React from "react";

function News() {
  const News = [
    {
      img: "/images/trump.png",
      title: "Trump’s Tax plan",
      time: "jan 30",
      info: " Today we face a total paradigm shift in our government. Donald Trump is the President-Elect…",
    },
    {
      img: "/images/trump.png",
      title: "Trump’s Tax plan",
      time: "jan 30",
      info: " Today we face a total paradigm shift in our government. Donald Trump is the President-Elect…",
    },
    {
      img: "/images/trump.png",
      title: "Trump’s Tax plan",
      time: "jan 30",
      info: " Today we face a total paradigm shift in our government. Donald Trump is the President-Elect…",
    },
  ];
  return (
    <div className="news">
      <div className="container">
        <h1 className="text-center"> Latest News </h1>
        <div className="Row mt-5">
          {News.map((news,i) => {
            const{img,title,info,time} = news;
            return (
              <div className="p-0" key={i}>
                <div className="card-wrapper">
                  <div className="img-wrapper">
                    <img src={img} alt="trump" className="img" />
                  </div>
                  <div className="p-3">
                    <div className="d-flex">
                      <h5 className="me-1">{title}</h5>
                      <span> . {time} </span>
                    </div>
                    <p className="mt-3">
                     {info}
                      <a className="text-decoration-none ms-1" href="/">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="link-wrapper mt-5">
          <a className="text-decoration-none" href="/">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
