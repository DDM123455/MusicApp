import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Home />

      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
