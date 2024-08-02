
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"; 
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Social from "./components/Social";



const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
         {/* <Route path="/social" element={<Social />} /> */}
          {/* Add other routes here */}
        </Routes>
    </Router>
  );
};

export default App;
