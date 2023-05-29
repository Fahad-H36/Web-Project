import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import Slider from "./components/Slider";
import Trend from "./components/Trend";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  const [selectedProducts, setselectedProducts] = useState([]);
  return (
    // <Router>
    //   <div className="App">
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" component={Home} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      <NavBar
        selectedProducts={selectedProducts}
        setselectedProducts={setselectedProducts}
      />
      <Home />
      <Products setselectedProducts={setselectedProducts} />
      <Trend />
      <Slider setselectedProducts={setselectedProducts} />

      <Footer />
    </div>
  );
}

export default App;
