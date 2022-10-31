import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Homepage/Homepage"
import Cart from "./Pages/Cart/Cart"
import Login from "./Pages/loginSignup/Login";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import About from "./Pages/About/About";
import { useDispatch } from "react-redux";
import { userInfoFetched } from "./redux/authActions";
import Product from "./Pages/Product/Product";
import Singnup from "./Pages/loginSignup/Signup";
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/Admin" element={<Admin />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/product/:productId" element={<Product />} />
                <Route exact path="/signup" element={<Singnup />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
