import Sidebar from "../Sidebar/Sidebar";
import SpellCkecker from "../SpellChecker/SpellChecker";

function LandingPage() {
  return (
    <div className="d-flex justify-content-between">
      <Sidebar />
      <SpellCkecker />
    </div>
  );
}
export default LandingPage;
