import * as pageimges from "../assets/PageIcons/PageIcons";

const options = [
  {
    value: "ENG",
    label: (
      <div className="language_options">
        <img src={pageimges.eng} height="18px" width="18px" alt="" />
        ENG
      </div>
    ),
  },
  {
    value: "GEO",
    label: (
      <div className="language_options">
        <img src={pageimges.geo} height="18px" width="18px" alt="" />
        GEO
      </div>
    ),
  },
];

export { options };
