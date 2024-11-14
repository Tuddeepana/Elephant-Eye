// src/router/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
import Admin from "../pages/admin/auth/Auth.jsx";
import Dashboard from "../pages/admin/sliderbar/Slider.jsx";
import Aboutus from "../pages/about/aboutus.jsx";
import Gallery from "../pages/gallery/gallery.jsx";
import PrivateRoute from './PrivateRoute.jsx';
import Book from '../pages/admin/menu/Book.jsx'
import Rooms from "../pages/rooms/Rooms.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rooms" element={<Rooms />} />

                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/book" element={<Book />} />

                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;