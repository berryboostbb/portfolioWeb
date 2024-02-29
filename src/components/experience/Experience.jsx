import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const frontEndData = [
    {
      skill: "React",
      level: "Experienced",
    },
    {
      skill: "React Native",
      level: "Experienced",
    },
    {
      skill: "JavaScript",
      level: "Experienced",
    },
    {
      skill: "TypeScript",
      level: "Experienced",
    },
    {
      skill: "Ionic",
      level: "Intermediate",
    },
    {
      skill: "Redux",
      level: "Experienced",
    },
    {
      skill: "HTML",
      level: "Experienced",
    },
    {
      skill: "CSS",
      level: "Experienced",
    },
    {
      skill: "Pusher Js",
      level: "Experienced",
    },
    {
      skill: "Socket io",
      level: "Experienced",
    },
  ];
  const backEndData = [
    {
      skill: "Node Js",
      level: "Experienced",
    },
    {
      skill: "GraphQL",
      level: "Intermediate",
    },
    {
      skill: "MongoDB",
      level: "Experienced",
    },
    {
      skill: "Firebase",
      level: "Experienced",
    },
    {
      skill: "Moengage",
      level: "Intermediate",
    },
    {
      skill: "Git",
      level: "Experienced",
    },
    {
      skill: "Json WebToken",
      level: "Experienced",
    },
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndData.map((d) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{d.skill}</h4>
                  <small className="text-light">{d.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndData.map((d) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{d.skill}</h4>
                  <small className="text-light">{d.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
