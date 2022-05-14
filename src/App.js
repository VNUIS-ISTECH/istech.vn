import { Route, Routes } from "react-router-dom";
import "./App.css";
import Activities from "./components/Activities";
import WsPython from "./components/WsPython";

import View from "./components/Header";

function App() {
  return (
    <>
      <View />
      <Routes>
        <Route path="/workshop" element={<Activities />} />
        <Route path="/workshop/:id" element={<WsPython />} />
      </Routes>
    </>
  );
}

export default App;
