import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Homepage/Homepage"
import Cart from "./Pages/Cart/Cart"
import Login from "./Pages/loginSignup/Login";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import About from "./Pages/About/About";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/Admin" element={<Admin />} />
                <Route exact path="/About" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
