import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SpellCkecker from "../SpellChecker/SpellChecker";
import TextToSpeech from "../TextToSpeech/TextToSpeech";
import SpeechToText from "../SpeechToText/SpeechToText";

function LandingPage() {
  const [cat, setCat] = useState(0);

  function setCategory(value: number) {
    setCat(value);
  }
  function checkCategory() {
    switch (cat) {
      case 1:
        return <SpellCkecker />;
      case 2:
        return <TextToSpeech />;
      case 3:
        return <SpeechToText />;
      default:
        return <SpellCkecker />;
    }
  }

  return (
    <div className="d-flex justify-content-between">
      <Sidebar setCategory={setCategory} />

      {checkCategory()}
    </div>
  );
}
export default LandingPage;
