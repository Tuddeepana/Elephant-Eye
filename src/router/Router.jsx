// src/router/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
import Admin from "../pages/admin/auth/Auth.jsx";
import Dashboard from "../pages/admin/sliderbar/Slider.jsx";
import Aboutus from "../pages/about/aboutus.jsx";
import PrivateRoute from './PrivateRoute.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;