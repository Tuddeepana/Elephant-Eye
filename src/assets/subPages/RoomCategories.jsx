import React, { useState } from 'react';
import deluxe_dbl_balcony from "../img/RoomImgs/room4.jpg";
import Deluxe_Twin from "../img/RoomImgs/room3.jpg";
import Triple_room from "../img/RoomImgs/room2.jpg";
import Deluxe_family from "../img/RoomImgs/room1.jpg";

const ImageSwitcher = () => {
  const images = {
    "Deluxe double room with balcony": deluxe_dbl_balcony,
    "Deluxe Twin room": Deluxe_Twin,
    "Triple room": Triple_room,
    "Deluxe family room": Deluxe_family,
  };

  const [selectedImage, setSelectedImage] = useState(images["Deluxe double room with balcony"]);
  const [activeRoom, setActiveRoom] = useState("Deluxe double room with balcony");

  const handleNavClick = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setActiveRoom(imageKey);
  };

  return (
    <div className="flex flex-col items-center w-full mt-10">
      {/* Room Description Section */}
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Discover Our Elegant Rooms</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Each room is thoughtfully designed to provide you with unparalleled comfort and relaxation. Enjoy breathtaking views, modern amenities, and the finest hospitality in an atmosphere that blends luxury and warmth.
        </p>
      </div>

      {/* Navigation bar */}
      <nav className="flex space-x-6 text-lg font-semibold mt-4">
        {Object.keys(images).map((key) => (
          <button
            key={key}
            onClick={() => handleNavClick(key)}
            className={`${
              activeRoom === key ? "underline" : ""
            } hover:underline `}
          >
            {key}
          </button>
        ))}
      </nav>

      {/* Display selected image */}
      <div className="w-11/12 mt-6">
        <img
          src={selectedImage}
          alt="Selected hotel view"
          className="w-full h-screen object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImageSwitcher;
