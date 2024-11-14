import React, { useEffect, useState } from "react";
import room from "../img/Lndpg_Imgs/room.jpg";
import beach from "../img/Lndpg_Imgs/beach.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../../utils/Navbar.jsx";

const images = [room, beach];
const nationalityOptions = ["Nationality", "Sri Lankan", "Non Sri Lankan"];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nationality, setNationality] = useState("Nationality"); // Set "Nationality" as the default value

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="relative h-screen w-screen overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay for White Box */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 bg-white bg-opacity-90 px-4 py-6 rounded-lg shadow-lg w-full max-w-xl sm:px-8 sm:py-10 md:max-w-2xl lg:max-w-4xl">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Check-in" />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Check-out" />
              </LocalizationProvider>

              <div className="w-full md:w-1/3 mt-4 md:mt-0">
                <Select
                  labelId="nationality-select-label"
                  id="nationality-select"
                  value={nationality}
                  onChange={handleNationalityChange}
                  className="border rounded w-full h-13 text-sm"
                >
                  {nationalityOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              <div className="mt-4 md:mt-0 md:w-auto w-full">
                <button
                  type="submit"
                  className="bg-amber-950 w-full md:w-36 px-6 py-4 text-white font-semibold rounded hover:bg-blue-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
