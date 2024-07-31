import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about"; // Example of another page
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add other routes here */}
        </Routes>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
