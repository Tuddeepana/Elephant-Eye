import React from "react";
import Card3 from "../../assets/Components/Cards/Card3/Card3";
import Img1 from '../../assets/img/cardImages/yala.jpg';
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import Footer from "../../utils/Footer.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Rooms = () => {
    const rooms = [
        {
            imageUrl: Img1,
            title: "Deluxe Room",
            location: "1st Floor",
            description: "A luxurious room with a beautiful view and modern amenities."
        },
        {
            imageUrl: Img1,
            title: "Standard Room",
            location: "2nd Floor",
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
                <div className="flex flex-wrap justify-center gap-4 max-w-full">
                    {rooms.map((room, index) => (
                        <Card3
                            key={index}
                            imageUrl={room.imageUrl}
                            title={room.title}
                            location={room.location}
                            description={room.description}
                        />
                    ))}
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/+94707676750"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
                style={{ maxWidth: 'calc(100% - 16px)' }}
            >
                <WhatsAppIcon />
            </a>

            {/* Footer */}
            <div className="mt-24">
                <Footer />
            </div>

        </div>
    );
};

export default Rooms;
