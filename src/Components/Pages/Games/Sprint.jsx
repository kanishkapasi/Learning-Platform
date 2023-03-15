import sprint from "../../Images/sprint.png";
import "./Sprint.css";
import Footer from "../Footer/Footer";

function Sprint() {
  return (
    <div className="sprintMain">
      <div className="sprintContainer">
        <div className="sprintLeft">
          <img src={sprint} alt="" />
        </div>
        <div className="sprintRight">
          <div className="heading">
            <h1
              style={{
                fontWeight: "1000",
                fontSize: "60px",
              }}
            >
              Sprint
            </h1>
            <div className="feed">
              <p>Speed Task</p>
            </div>
          </div>
          <p
            className="p-1"
            style={{
              fontSize: "17px",
            }}
          >
            Trains the skill of fast translation. You have to choose if the
            <br />
            translation corresponds to the suggested word.
          </p>
          <p
            className="p-2"
            style={{
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Choose Level:
          </p>
          <div className="level p-2">
            <div className="round">A1</div>
            <div className="round">A2</div>
            <div className="round">B1</div>
            <div className="round">B2</div>
            <div className="round">C1</div>
            <div className="round">C2</div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Sprint;
