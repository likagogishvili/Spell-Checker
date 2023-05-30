import "./Header.css";
import * as headerIMG from "../assets/header/headerimges";
import { Dropdown } from "react-bootstrap";

function Header() {
  const handleDropdownSelect = (eventKey: any) => {
    // console.log("Selected:", eventKey);
  };

  return (
    <header>
      <button className="btn btn-outline-secondary chrome_btn">
        <i
          className="icon_chrome"
          style={{
            backgroundImage: `url(${headerIMG.chromeIcon})`,
          }}
        ></i>
        Add to Chrome
      </button>
      <button
        type="button"
        style={{ backgroundColor: "#2D62ED", fontSize:"14px" }}
        className="btn btn-primary"
      >
        Upgrade to Pro
      </button>
      <Dropdown onSelect={handleDropdownSelect} className="mx-2 mx-md-5">
        <Dropdown.Toggle variant="link" id="avatar-dropdown">
          <img
            src={headerIMG.person}
            alt="Profile"
            className="rounded-circle profile-image"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="about">About Me</Dropdown.Item>
          <Dropdown.Item eventKey="settings">Settings</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
}

export default Header;
