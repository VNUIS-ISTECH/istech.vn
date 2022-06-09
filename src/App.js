import style from "./App.css";
import AboutUs from "./components/AboutUs";
import Apply from "./components/Apply";
import IntroAbout from "./components/IntroAbout";

function App() {
  return (
    <div className="font-body">
      <IntroAbout />
      <AboutUs />
      <Apply />
    </div>
  );
}

export default App;
