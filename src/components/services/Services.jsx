import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const UIDATA = [
  { title: "User Interface (UI) Design" },
  { title: "User Experience (UX) Design" },
  { title: "Responsive Design Web/Mobile App" },
  { title: "User Research and Testing" },
  { title: "Accessibility Compliance" },
  { title: "Prototyping and Mockups" },
  { title: "Consulting and Feedback" },
];

const APPDATA = [
  { title: "Cross-Platform Development" },
  { title: "UI/UX Design Integration" },
  { title: "App Testing and Quality Assurance" },
  { title: "App Maintenance and Updates" },
  { title: "Bug Fixing" },
  { title: "API Integration" },
  { title: "Push Notifications" },
  { title: "Security and Data Privacy" },
  { title: "App Store Submission" },
];

const WEBDATA = [
  { title: "Responsive Web Design" },
  { title: "Web Application Development" },
  { title: "Performance Optimization" },
  { title: "Website Maintenance and Updates" },
  { title: "Website Security" },
  { title: "Web Hosting and Deployment" },
  { title: "Analytics and Tracking" },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {UIDATA.map((d) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p>{d.title}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            {APPDATA.map((d) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p>{d.title}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {WEBDATA.map((d) => (
              <li>
                <BiCheck className="service__list-icon" />
                <p>{d.title}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
