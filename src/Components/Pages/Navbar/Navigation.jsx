import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navigation() {
  const [iseOpen, setIsOpen] = useState(false);
  const [screenChange, setScreenChange] = useState(window.innerWidth);
  const handle = () => {
    setIsOpen(!iseOpen);
  };

  useEffect(() => {
    const screenWidth = () => {
      setScreenChange(window.innerWidth);
    };

    window.addEventListener("resize", screenWidth);

    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, []);
  return (
    <div className="navContainer">
      <div className="navbarContainer">
        <div className="left">
          <h3>GlobalTalk</h3>
        </div>
        {(iseOpen || screenChange > 650) && (
          <div className="right">
            <ul>
              <Link to={"/"} className="list">
                <li>Home</li>
              </Link>
              <Link to={"/Sprint"} className="list">
                <li>Sprint</li>
              </Link>
              <Link to={"/Audio"} className="list">
                <li>Audio Call</li>
              </Link>
              <Link to={"/About"} className="list">
                <li>About</li>
              </Link>
            </ul>
          </div>
        )}

        <FaBars className="icon" onClick={handle} />
      </div>
    </div>
  );
}

export default Navigation;
