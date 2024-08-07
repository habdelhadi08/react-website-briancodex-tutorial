import { useState } from "react";
import Navbar from "./components/Narbar";
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Signup from "./components/pages/Signup";


import "./App.css";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<Signup />} />
    
      </Routes>
    </div>
  );
}

export default App;
