import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJops] = useState([]);
  const [value, setValue] = useState(1);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJops(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section container">
      <div className="title">
        <h2>
          Exp<span className="title__b">erien</span>ces
        </h2>
        <div className="underline"></div>
      </div>
      <div className="jobs__center">
        {/* btn Container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return <button
              key={item.id}
              onClick={() => setValue(index)}
                className={`job__btn ${index === value && "active__btn"}`}
                >
              {item.company}
            </button>;
          })}
        </div>
        {/* Job Info */}
      </div>
      <article className="jon__info">
        <h3>{title}</h3>
        <h4 className="btn__company">{company}</h4>
        <p className="job__date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job__desc">
              <FaAngleDoubleRight className="job__icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
