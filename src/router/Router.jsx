//Set up the routes for the application
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
import Admin from "../pages/admin/auth/Auth.jsx";
import Dashboard from "../pages/admin/sliderbar/Slider.jsx";
const Router = () => {
  return (

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />

                  {/*Add the routes for the Admin and Dashboard components */}
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/dashboard" element={<Dashboard />} />

              </Routes>
          </BrowserRouter>

  );
}

export default Router;