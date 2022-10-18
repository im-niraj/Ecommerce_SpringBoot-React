import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Homepage/Homepage"
import Cart from "./Pages/Cart/Cart"
import Login from "./Pages/loginSignup/Login";

function App() {
  return (
        <BrowserRouter>
            <Navbar/>
            <Login/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
