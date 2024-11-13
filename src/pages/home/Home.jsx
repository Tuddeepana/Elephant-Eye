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
import Yala from '../../assets/img/cardImages/yala.jpg'
import Kataragama from '../../assets/img/cardImages/kataragama.jpg'
import Thissamaharama from '../../assets/img/cardImages/thissamahara.jpg'
import Bundala from '../../assets/img/cardImages/Bundala.jpg'

import '../../style/main.css'

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
            imageUrl: Yala,
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
            title: "Bundala Birds Parks",
            location: "4 hours from Jaffna",
            description: "Discover the desert beauty"
        },
        {
            imageUrl: beach,
            title: "Ridiyagama",
            location: "5 hours from Trincomalee",
            description: "Relax on a secluded island"
        },
        {
            imageUrl: beach,
            title: "Bunadala Paradise",
            location: "6 hours from Trincomalee",
            description: "Enjoy the serene environment"
        }
    ];

    const unbeatableOffers = [
        {
            imageUrl: Srilanka,
            title: "Sri Lankan Cuisine",
            location: "1 hour from Nuwara Eliya",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Chinees,
            title: "Chinese Meal",
            location: "2 hours from Kandy",
            description: "A serene mountain retreat"
        },
        {
            imageUrl: Western,
            title: "Western Meals",
            location: "In the heart of Colombo",
            description: "Experience the vibrant city life"
        }
    ];

    return (
        <>
            <div>
                <LandingPage/>
                {/* This Introduction page 1st Section*/}
                <div className="flex flex-col items-center justify-center ">
                    <h1 className="text-center text-8xl mt-24 font-bold" style={{color: '#2a2a2a'}}>Elephant Eye</h1>
                    <p className="mt-6 font-semibold text-base">Where Tranquility Embraces Elegance!</p>
                    <p className="text-center max-w-2xl mt-4 text-xl font-semibold">
                        Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in
                        culture
                        and tranquility.
                    </p>
                    <h1 className="text-center text-3xl mt-16 font-bold" style={{color:'#2a2a2a'}}>-Why Book Direct with us-</h1>
                </div>

                {/* This is the HomeCover component use for show hotel main  image dsc */}
                <div className="mt-24">
                    <HomeCover/>
                </div>
                {/* This is the Card component use for show hotel offers 2nd Section */}
                <h1 className="text-center text-7xl mt-24 font-bold" style={{color: '#2a2a2a'}} >Trunk Cafe And Restaurant</h1>

                <div className="mt-8 flex justify-center">
                    <div className="w-full max-w-6xl">
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
                {/* This is the Reviews component use for show hotel reviews 3rd Section */}

                <h1 className="text-center text-7xl mt-24 font-bold" style={{color: '#2a2a2a'}} >Conventional Location</h1>
                <div className="mt-8 flex justify-center">
                    <div className="w-full max-w-6xl">
                        <div className="block md:hidden">
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
                        <div className="hidden md:flex flex-wrap justify-end space-x-4">
                            <div className="flex justify-end space-x-4 w-full">
                                {slides.slice(0, 3).map((slide, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={slide.imageUrl}
                                        title={slide.title}
                                        location={slide.location}
                                        description={slide.description}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-end space-x-4 w-full mt-4">
                                {slides.slice(3, 6).map((slide, index) => (
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
                        <CenteredLine/>
                    </div>
                </div>

                {/* This is the Reviews component use for show hotel reviews 4th Section */}
                <div className='mt-24'>
                <Reviews/>
                </div>


            </div>
            <div className="">
                <Footer/>
            </div>
            <a
                href="https://wa.me/+94707676750"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
                <WhatsAppIcon/>
            </a>
        </>
    );
};

export default Home;