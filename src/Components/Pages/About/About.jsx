import picOne from "../../Images/one (1).png";
import picTwo from "../../Images/one (2).png";
import picThree from "../../Images/one (3).png";
import "./About.css";
import AOS from "aos";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const people = [
    {
      image: `${picTwo}`,
      name: "Alex",
      description:
        "Made design, api queries, statistics, sprint game, did some layout and supervised development.",
    },
    {
      image: `${picOne}`,
      name: "Gabriel",
      description:
        "Authorization / registration module, Audio Challenge game, collection of statistics, routing, typing of the studied words",
    },
    {
      image: `${picThree}`,
      name: "Marcus",
      description:
        "Made the application home page, e-textbook, layout, and adaptive.",
    },
  ];
  return (
    <div className="aboutContainer">
      <div className="about">
        {people.map((e) => {
          return (
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="left">
                <img src={e.image} alt="" className="avatar" />
              </div>
              <div className="right">
                <div className="head">
                  <h1>{e.name}</h1>
                  <p className="para">Github</p>
                </div>
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default About;
