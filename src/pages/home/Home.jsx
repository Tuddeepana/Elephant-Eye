// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "../../utils/Footer.jsx";
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import HomeCover from "../../assets/subPages/HomeCover.jsx";
import Card from "../../assets/Components/Cards/Card1/Card.jsx";
import CenteredLine from "../../assets/Components/Divider/CenteredLine.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import beach from "../../assets/img/Lndpg_Imgs/beach.jpg";
import Reviews from "../../assets/subPages/Reviews.jsx";
import Chinees from "../../assets/img/cardImages/chinese.jpg"
import Srilanka from '../../assets/img/cardImages/srilanka.jpg'
import Western from '../../assets/img/cardImages/western.jpg'
import Kirind from '../../assets/img/cardImages/kirirnda.jpg'

import Kataragama from '../../assets/img/cardImages/kataragama.jpg'
import Thissamaharama from '../../assets/img/cardImages/thissamahara.jpg'
import Bundala from '../../assets/img/cardImages/Bundala.jpg'
import Ridiyagama from '../../assets/img/cardImages/ridiyagama.jpg'
import Kururlu from '../../assets/img/cardImages/kururlu.jpg'
import Dry from '../../assets/img/cardImages/Dry.jpg'
import Ridi from '../../assets/img/cardImages/ridi.jpg'

import '../../style/main.css'
import RoomCategories from "../../assets/subPages/RoomCategories.jsx";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: "unslick" // Disable slick for screens wider than 768px
            }
        ]
    };

    const slides = [
        {
            imageUrl: Ridiyagama,
            title: "Yala National Park",
            location: "1 hour from Nuwara Eliya",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Kirind,
            title: "Kirinda Beach",
            location: "2 hours from Kandy",
            description: "A serene mountain retreat"
        },
        {
            imageUrl: Kataragama,
            title: "Kataragama",
            location: "In the heart of Colombo",
            description: "Experience the vibrant city life"
        },
        {
            imageUrl: Thissamaharama,
            title: "Thissamaharama Temple",
            location: "3 hours from Galle",
            description: "Explore the lush forests"
        },
        {
            imageUrl: Bundala,
            title: "Bunadala Paradise",
            location: "4 hours from Jaffna",
            description: "Discover the desert beauty"
        },
        {
            imageUrl: Ridi,
            title: "Ridiyagama",
            location: "5 hours from Trincomalee",
            description: "Relax on a secluded island"
        },
        {
            imageUrl: beach,
            title: "Bunadala Paradise",
            location: "6 hours from Trincomalee",
            description: "Enjoy the serene environment"
        },
        {
            imageUrl: Dry,
            title: "Mirijjawila Botanical Garden",
            location: "2.5 hours from Kandy",
            description: "A historic temple with stunning views"
        },
        {
            imageUrl: Kururlu,
            title: "Kurulu Uyana",
            location: "3.5 hours from Colombo",
            description: "A bird sanctuary with diverse species"
        },

    ];

    const unbeatableOffers = [
        {
            imageUrl: Srilanka,
            title: "Sri Lankan Delicacies",
            location: "",//if want added the details
            description: ""
        },
        {
            imageUrl: Chinees,
            title: "Chinese Cuisines ",
            location: "",
            description: ""
        },
        {
            imageUrl: Western,
            title: "Western Dishes ",
            location: "",
            description: ""
        }
    ];

    return (
        <>
            <div className="overflow-hidden">
                <LandingPage />

                {/* This Introduction page 1st Section */}
                <div className="flex flex-col items-center justify-center px-4">
                    <h1 className="text-center text-8xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Elephant Eye</h1>
                    <p className="mt-6 font-semibold text-base">Where Tranquility Embraces Elegance!</p>
                    <p className="text-center max-w-2xl mt-4 text-xl font-semibold">
                        Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in culture and tranquility.
                    </p>
                    <h1 className="text-center text-3xl mt-16 font-bold" style={{ color: '#2a2a2a' }}>-Why Book Direct with us-</h1>
                </div>

                {/* This is the HomeCover component use for show hotel main  image dsc */}
                <div className="mt-24">
                    <HomeCover />
                </div>

                {/* Offers Section */}
                <h1 className="text-center text-7xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Trunk Cafe And Restaurant</h1>
                <div className="mt-8 flex justify-center w-full overflow-hidden">
                    <div className="w-full max-w-full md:max-w-6xl">
                        <div className="block md:hidden">
                            <Slider {...settings}>
                                {unbeatableOffers.map((slide, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={slide.imageUrl}
                                        title={slide.title}
                                        location={slide.location}
                                        description={slide.description}
                                    />
                                ))}
                            </Slider>
                        </div>
                        <div className="hidden md:flex justify-between space-x-4">
                            {unbeatableOffers.map((slide, index) => (
                                <Card
                                    key={index}
                                    imageUrl={slide.imageUrl}
                                    title={slide.title}
                                    location={slide.location}
                                    description={slide.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <RoomCategories />

                {/* Conventional Location Section */}
                {/* Conventional Location Section */}
                <h1 className="text-center text-7xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Conventional Location</h1>
                <div className="mt-8 flex justify-center w-full overflow-hidden">
                    <div className="w-full max-w-full md:max-w-6xl">
                        <div className="block md:hidden">
                            {/* For small screens, use a slider */}
                            <Slider {...settings}>
                                {slides.map((slide, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={slide.imageUrl}
                                        title={slide.title}
                                        location={slide.location}
                                        description={slide.description}
                                    />
                                ))}
                            </Slider>
                        </div>
                        <div className="hidden md:grid grid-cols-3 gap-4">
                            {/* For medium and larger screens, use a grid */}
                            {slides.map((slide, index) => (
                                <Card
                                    key={index}
                                    imageUrl={slide.imageUrl}
                                    title={slide.title}
                                    location={slide.location}
                                    description={slide.description}
                                />
                            ))}
                        </div>
                        <CenteredLine />
                    </div>
                </div>


                {/*  This is the Reviews component use for show hotel reviews 4th Section  */}
                <div className='mt-24'>
                    <Reviews />
                </div>
            </div>

            <Footer />

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
        </>
    );
};

export default Home;
