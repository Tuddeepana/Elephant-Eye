import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import InputField from "../Components/InputField.jsx";
import room from "../img/Lndpg_Imgs/room.jpg";
import beach from "../img/Lndpg_Imgs/beach.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../../utils/Navbar.jsx";

const images = [room, beach];
const nationalityOptions = ["Nationality", "Sri Lankan", "Non Sri Lankan"];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [age, setAge] = useState("");
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <div>
        <Navbar/>
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

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 bg-white bg-opacity-90 px-8 py-10 rounded-lg shadow-lg max-w-6xl w-11/12">
            <form className="space-y-2">
              <div className="flex space-x-24">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                      label="Check-in"
                      value={checkInDate}
                      onChange={(newValue) => setCheckInDate(newValue)}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                      label="Check-out"
                      value={checkOutDate}
                      onChange={(newValue) => setCheckOutDate(newValue)}
                  />
                </LocalizationProvider>

                <div className="w-1/3 ">
                  <Select
                      labelId="nationality-select-label"
                      id="nationality-select"
                      value={age}
                      onChange={handleAgeChange}
                      className="border  rounded w-full h-13 text-sm "
                  >
                    <MenuItem value="" disabled>Select Nationality</MenuItem>
                    {nationalityOptions.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="flex justify-center w-40 h-10">
                  <button
                      type="submit"
                      className="bg-amber-950 w-full text-white font-semibold rounded hover:bg-blue-700"
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