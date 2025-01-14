import React, {useEffect, useState} from 'react';
import room from '/images/heroSectionImages/Hero_Section_1.webp';
import beach from '/images/heroSectionImages/Hero_Section_2.webp';
import property from '/images/heroSectionImages/Hero_Section_3.webp';

const images = [room, beach, property];

const Home_Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change the image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden justify-center items-center">
            <div className="relative flex-grow w-screen h-screen">
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
            </div>

            {/*    Adding the middle items*/}
            <div className="absolute rounded-xl border-2 border-[#aa8e66] overflow-hidden backdrop-blur-[2px]">
                <div className="flex flex-col items-center justify-center text-[#d9d9d9] px-4 gap-[2rem] py-[2rem]">
                    <h1 className="text-center text-8xl font-bold text-[#aa8e66]">Elephant
                        Eye</h1>
                    <p className="font-semibold text-base">Where Tranquility Embraces Elegance!</p>
                    <p className="text-center max-w-2xl text-xl font-semibold">
                        Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in
                        culture and tranquility.
                    </p>
                </div>
                <div className="absolute bottom-0 -z-10 opacity-50 bg-black w-full h-full"/>
            </div>

        </div>
    );
}

export default Home_Hero;