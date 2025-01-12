// src/router/Router.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load route components
const Home = lazy(() => import('../pages/home/Home.jsx'));
const Admin = lazy(() => import('../pages/admin/auth/Auth.jsx'));
const Dashboard = lazy(() => import('../pages/admin/sliderbar/Slider.jsx'));
const Aboutus = lazy(() => import('../pages/about/aboutus.jsx'));
const Gallery = lazy(() => import('../pages/gallery/gallery.jsx'));
const PrivateRoute = lazy(() => import('./PrivateRoute.jsx'));
const Book = lazy(() => import('../pages/admin/menu/Book.jsx'));
const Rooms = lazy(() => import('../pages/rooms/Rooms.jsx'));
const Form = lazy(() => import('../assets/Components/Forms/Form1.jsx'));
const Offer = lazy(() => import('../pages/admin/menu/Offer.jsx'));
const RoomTable = lazy(() => import('../Bookings/RoomTable.jsx'));

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<Form />} />
          <Route path="/roomtable" element={<RoomTable />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/book" element={<Book />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/offer" element={<PrivateRoute><Offer /></PrivateRoute>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;