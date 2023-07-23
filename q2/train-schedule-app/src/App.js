import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTrainsPage from "./pages/AllTrainsPage";
import SingleTrainPage from "./pages/SingleTrainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={AllTrainsPage} />
        <Route path="/train/:trainId" element={SingleTrainPage} />
      </Routes>
    </Router>
  );
}

export default App;
