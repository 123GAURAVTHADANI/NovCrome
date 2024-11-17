import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./Components/Main/Main";
import MobileComponent from "./Components/MobileComponent/Mobile";
import WashingComponent from "./Components/WashingComponent/Washing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/mobile" element={<MobileComponent />} />
        <Route path="/washing-machine" element={<WashingComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
