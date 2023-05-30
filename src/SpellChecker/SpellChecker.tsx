import "./spellCkecker.css";
import * as pageimges from "../assets/PageIcons/PageIcons";
function SpellCkecker() {
    
  return (
    <div className="spelchecker">
      <div className="spelchecker_top">
        <button
          type="button"
          style={{ backgroundColor: "#2D62ED" }}
          className="btn btn-primary btn_fonts"
        >
          <img src={pageimges.check} alt="" />
          Check
        </button>

        <div className="d-flex">
          <button
            type="button"
            className="btn btn-light p-2 btn_fonts"
            style={{ backgroundColor: "#EDEDED", color: "#2D62ED" }}
          >
            <img src={pageimges.copy} alt="" style={{ marginRight: "10px" }} />
            Copy
          </button>

          <button
            type="button"
            className="btn btn-light p-2 btn_fonts mx-3"
            style={{ backgroundColor: "#ffff", color: "#606060" }}
          >
            <img
              src={pageimges.delete_bin}
              alt=""
              style={{ marginRight: "10px" }}
            />
            Delete
          </button>
          <div className="vl"></div>


        </div>

      </div>
    </div>
  );
}
export default SpellCkecker;
