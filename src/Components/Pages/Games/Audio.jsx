import audioOne from "../../Images/audio (1).png";
import audioTwo from "../../Images/audio (2).png";
import "./Audio.css";
import Footer from "../Footer/Footer";

function Audio() {
  return (
    <div className="audioContainer">
      <div className="middleContainer">
        <img src={audioOne} alt="" />
        <br />
        <img src={audioTwo} alt="" className="mt-4" />
        <div className="words mt-5">
          <div className="word">
            <p>prêt hypothécaire</p>
          </div>
          <div className="word">
            <p>Correct</p>
          </div>
          <div className="word">
            <p>selon laquelle</p>
          </div>
          <div className="word">
            <p>citer</p>
          </div>
          <div className="word">
            <p>nourriture</p>
          </div>
        </div>
        <div className="dont">
          <p>I don't Know</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Audio;
