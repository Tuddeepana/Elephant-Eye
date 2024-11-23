import React from "react";
import Card3 from "../../assets/Components/Cards/Card3/Card3";
import Img1 from "../../assets/img/gallery/rooms/family.jpg";
import Img1a from "../../assets/img/gallery/rooms/family1.jpg";
import Img2 from "../../assets/img/gallery/rooms/triple1.jpg";
import Img3 from "../../assets/img/gallery/rooms/triple.jpg";
import Img4 from "../../assets/img/gallery/rooms/Twin.jpg";
import Img5 from "../../assets/img/gallery/rooms/twin1.jpg";
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import Footer from "../../utils/Footer.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaRulerCombined, FaUserFriends } from "react-icons/fa";

const Rooms = () => {
    const rooms = [
        {
            images: [Img1, Img1a], // Two images per room
            title: "Deluxe Family Room",
            size: "46 SQM",
            occupancy: "03 (With an extra bed)",
            description: "A luxurious room with a beautiful view and modern amenities."
        },
        {
            images: [Img2, Img3],
            title: "Deluxe Triple Room",
            size: "32 SQM",
            occupancy: "02",
            description: "A comfortable room with all the essential facilities."
        },
        {
            images: [Img4, Img5],
            title: " Deluxe Twin Room",
            size: "32 SQM",
            occupancy: "02",
            description: "A comfortable room with all the essential facilities."
        }
    ];

    return (
        <div className="overflow-x-hidden">
            <LandingPage />

            {/* Header Section */}
            <div className="flex flex-col items-center justify-center px-4">
                <h1 className="text-center text-6xl md:text-8xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Rooms</h1>
                <p className="text-center max-w-2xl mt-4 text-lg md:text-xl font-semibold">
                    Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in culture and tranquility.
                </p>
            </div>

            {/* Room Cards Section */}
            <div className="mt-24 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-2xl overflow-hidden group transition-transform transform hover:scale-105 duration-300"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-64 overflow-hidden">
                                {/* First Image */}
                                <img
                                    src={room.images[0]}
                                    alt={room.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                {/* Second Image (Hover) */}
                                <img
                                    src={room.images[1]}
                                    alt={`${room.title} - hover`}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                            </div>
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">{room.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                                <div className="flex items-center text-gray-600 text-sm mb-2">
                                    <FaRulerCombined className="mr-2" />
                                    {room.size}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <FaUserFriends className="mr-2" />
                                    {room.occupancy}
                                </div>
                                {/* Sexy Book Now Button */}
                                <button
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/+94707676750"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
                style={{ maxWidth: 'calc(100% - 16px)' }}
            >
                <WhatsAppIcon className="text-xl" />
            </a>

            {/* Footer */}
            <div className="mt-24">
                <Footer />
            </div>
        </div>
    );
};

export default Rooms;
