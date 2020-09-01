import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tatu from "./pages/Tatu"
import Paint from "./pages/Paint";
import Music from "./pages/Music";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./index.css";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/Tatu/" component={Tatu} />
          <Route exact path="/Music" component={Music} />
          <Route exact path="/Paint" component={Paint} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
