import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ imageUrl, title, location, description }) => {
    return (
        <div
            className="relative w-full sm:w-96 h-[500px] bg-cover bg-center shadow-lg overflow-hidden group"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-all duration-300">
                <h2 className="text-white text-xl font-bold">{title}</h2>
                <p className="text-gray-300 text-sm">{location}</p>
                <p className="text-gray-300 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {description}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
