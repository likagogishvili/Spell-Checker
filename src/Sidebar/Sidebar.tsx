import "./sidebar.css";
import * as landingIMG from "../assets/Landing/landing";
import { useState } from "react";
import { SidebarProps } from "../assets/intefaces";

function Sidebar({ setCategory }: SidebarProps) {
  const [selected, setSelected] = useState(1);

  const handleItemClick = (itemId: number) => {
    setSelected(itemId);
    setCategory(itemId);
  };

  const getNavItemClassName = (itemId: number) => {
    return `nav-item p-1 ${selected === itemId ? "selected" : ""}`;
  };

  const getNavItemTextStyle = (itemId: number) => {
    return selected === itemId ? { color: "#2D62ED" } : { color: "white" };
  };

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start text-dark min-vh-100 sidebar">
      <ul
        className="nav nav-pills flex-column  align-items-center align-items-sm-start sidebar_components "
        id="menu"
      >
        <li className={getNavItemClassName(1)}>
          <div
            className="nav-link align-middle pointer"
            onClick={() => handleItemClick(1)}
          >
            <img
              src={
                selected === 1
                  ? landingIMG.SpellCheck_blue
                  : landingIMG.SpellCheck
              }
              alt=""
            />
            <p
              className="ms-1 d-none d-sm-inline"
              style={getNavItemTextStyle(1)}
            >
              Spellchecker
            </p>
          </div>
        </li>
        <li className={getNavItemClassName(2)}>
          <div
            className="nav-link  align-middle pointer"
            onClick={() => handleItemClick(2)}
          >
            <img
              src={
                selected === 2
                  ? landingIMG.textToSpeech_blue
                  : landingIMG.TextToSpeech
              }
              alt=""
            />
            <p
              className="ms-1 d-none d-sm-inline"
              style={getNavItemTextStyle(2)}
            >
              Text to speech
            </p>
          </div>
        </li>
        <li className={getNavItemClassName(3)}>
          <div
            className="nav-link  align-middle pointer"
            onClick={() => handleItemClick(3)}
          >
            <img
              src={
                selected === 3
                  ? landingIMG.speechToText_blue
                  : landingIMG.SpeechToText
              }
              alt=""
            />
            <p
              className="ms-1 d-none d-sm-inline"
              style={getNavItemTextStyle(3)}
            >
              Speech to text
            </p>
          </div>
        </li>
      </ul>

      <ul
        className="nav nav-pills flex-column  align-items-center align-items-sm-start sidebar_components "
        id="downMenu"
      >
        <li>
          <hr className="line mt-5 mb-4" />
          <div className="nav-link align-middle ">
            <img src={landingIMG.settings} alt="" />
            <p className="ms-1 d-none d-sm-inline" style={{ color: "white" }}>
              Speech to text
            </p>
          </div>
        </li>
        <li>
          <div className="nav-link  align-middle ">
            <img src={landingIMG.facebook} alt="" />
            <p className="ms-1 d-none d-sm-inline" style={{ color: "white" }}>
              Facebook
            </p>
          </div>
        </li>
        <li>
          <div className="nav-link  align-middle">
            <img src={landingIMG.questionMark} alt="" />
            <p className="ms-1 d-none d-sm-inline" style={{ color: "white" }}>
              Contact support
            </p>
          </div>
          <hr className="line mt-4 mb-5" />
        </li>
      </ul>

      <div className="contrast cur_poniter">
        <button
          style={{
            border: "none",
            background: "none",
            backgroundColor: "transparent",
          }}
        >
          <img src={landingIMG.moon} alt="" />
        </button>
        <button
          style={{
            border: "none",
            background: "none",
            backgroundColor: "transparent",
          }}
        >
          <img src={landingIMG.sun} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
