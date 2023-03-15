import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
// Images
import homeOne from "../../Images/main.png";
import homeTwo from "../../Images/home1.png";
import homeThree from "../../Images/home2.png";
import homeFour from "../../Images/home3.png";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="mainHomeContainer">
      <div className="homeContainer">
        {/* Home Section */}
        <motion.div
          className="left"
          initial={{
            y: -200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h5>E-Commerce Platform</h5>
          <h1>
            Learning And
            <br /> Teaching Online,
            <br />
            Made Easy
          </h1>
          <p>
            Practise your English and learn new things
            <br />
            with the platform
          </p>
          <button
            onClick={() => {
              navigate("/About");
            }}
          >
            About Platform
          </button>
          <div className="games mt-3">
            <div className="leftG">
              <h1>600+</h1>
              <p>Popular Words</p>
            </div>
            <div className="rightG">
              <h1>2+</h1>
              <p>mini Games</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="right"
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img src={homeOne} alt="" className="childImage" />
        </motion.div>
        {/* End Of home Section */}
      </div>
      {/* Second Home Section */}
      <div className="learnContainer">
        <div
          className="learnLeft"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={homeTwo} alt="" className="learnIcon" />
        </div>
        <div
          className="learnRight"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            Learn a Language <br />A playful way
          </h1>
          <p>
            Make learning words more fun with mini-
            <br />
            games
          </p>
          <div className="boxes">
            <div
              className="mini"
              onClick={() => {
                navigate("/Sprint");
              }}
            >
              <p className="pt-2">Sprint</p>
            </div>
            <div
              className="mini"
              onClick={() => {
                navigate("/Audio");
              }}
            >
              <p className="pt-2">Audio Call</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Of second Home Section */}

      {/* Third Home Section */}
      <div className="textContainer">
        <div className="textsubContainer">
          <div
            className="textLeft"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={homeThree} alt="" className="threeIcon" />
          </div>
          <div
            className="textRight"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>
              Increase Your
              <br />
              Vocabulary
            </h1>
            <p>
              traditional and new Effective approches to
              <br />
              word study
            </p>
            <button>textBooks</button>
          </div>
        </div>
      </div>
      {/* End Of Third Home Section */}

      {/* Fourth Home Section */}
      <div className="progressContainer">
        <div
          className="progLeft"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={homeFour} alt="" className="progIcon" />
        </div>
        <div
          className="progRight"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>
            Watch your <br />
            Progress
            <br /> Everyday
          </h1>
          <p>
            Save statistics on your achievements, words
            <br /> learned, and mistakes
          </p>
          <button onClick={() => navigate("/Statistics")}>Statics</button>
        </div>
      </div>
      {/* End Of Fourth Home Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
