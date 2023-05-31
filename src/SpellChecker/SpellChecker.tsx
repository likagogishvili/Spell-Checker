import "./spellCkecker.css";
import * as pageimges from "../assets/PageIcons/PageIcons";
import { useState } from "react";
import Select from "react-select";
import { options } from "./options";
import TextField from "./TextField";
function SpellCkecker() {
  const [selectedOption, setSelectedOption] = useState<any>(options[0]);
  const handleChange = (selected: any) => {
    setSelectedOption(selected);
  };
  return (
    <div className="spelchecker">
      <div className="spelchecker_top">
        <button
          type="button"
          style={{ backgroundColor: "#2D62ED" }}
          className="btn btn-primary btn_fonts"
        >
          <img src={pageimges.check} alt="check" />
          <span className="btn_txt">Check</span>
        </button>

        <div className="d-flex sec_cont">
          <button
            type="button"
            className="btn btn-light  btn_fonts"
            style={{ backgroundColor: "#EDEDED", color: "#2D62ED" }}
          >
            <img src={pageimges.copy} alt="copy" className="img_margin" />
            <span className="btn_txt ">Copy</span>
          </button>

          <button
            type="button"
            className="btn btn-light btn_fonts"
            style={{ backgroundColor: "#ffff", color: "#606060" }}
          >
            <img
              src={pageimges.delete_bin}
              alt="delete"
              className="img_margin"
            />
            <span className="btn_txt">Delete</span>
          </button>
          <div className="vl"></div>
          <Select
            defaultValue={selectedOption}
            onChange={handleChange}
            options={options}
            className="lang_select"
            isSearchable={false}
          />
        </div>
      </div>

      <TextField />
    </div>
  );
}
export default SpellCkecker;
