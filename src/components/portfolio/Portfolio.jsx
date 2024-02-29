import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/meditour.png";
import IMG2 from "../../assets/sakina.jpeg";
import IMG3 from "../../assets/berryboost.jpeg";
import IMG4 from "../../assets/geysital.png";
import IMG5 from "../../assets/procurement.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "The MediTour Global",
    demo: "https://meditour.global/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sakina Int. Hospital",

    demo: "https://ivfpakistan.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "BerryBoost INC.",
    demo: "https://berryboost.us/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Geysital",
    demo: "https://play.google.com/store/apps/details?id=com.geysital",
  },
  {
    id: 5,
    image: IMG5,
    title: "Procurement League",
    demo: "https://play.google.com/store/apps/details?id=com.pro.procurementleague&hl=en&gl=US",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" style={{ height: "250px" }} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn">
                  Github
                </a> */}
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
