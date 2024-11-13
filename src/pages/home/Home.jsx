import Footer from "../../utils/Footer.jsx";
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import HomeCover from "../../assets/subPages/HomeCover.jsx";
import Card from "../../assets/Components/Cards/Card.jsx";
import CenteredLine from "../../assets/Components/Divider/CenteredLine.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import beach from "../../assets/img/Lndpg_Imgs/beach.jpg";

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

    return (
        <>
            <div>
                <LandingPage/>
                <div className="flex flex-col items-center justify-center ">
                    <h1 className="text-center text-6xl mt-24">Elephant Eye</h1>
                    <p className="mt-4">Where Tranquility Embraces Elegance!</p>
                    <p className="text-center max-w-2xl mt-4 text-lg">
                        Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in
                        culture
                        and tranquility.
                    </p>
                    <h1 className="text-center text-4xl mt-4">Why Book us</h1>
                </div>
                <HomeCover/> {/* This is the HomeCover component use for show hotel main  image dsc */}

                <h1 className="text-center text-6xl mt-24">Unbeatable Offers</h1>

                <div className="mt-8 flex justify-center">
                    <div className="w-full max-w-6xl">
                        <div className="block md:hidden">
                            <Slider {...settings}>
                                <Card
                                    imageUrl={beach}
                                    title="Beach Paradise"
                                    location="1 hour from Nuwara Eliya"
                                    description="A beautiful place to visit"
                                />
                                <Card
                                    imageUrl={beach}
                                    title="Mountain Escape"
                                    location="2 hours from Kandy"
                                    description="A serene mountain retreat"
                                />
                                <Card
                                    imageUrl={beach}
                                    title="City Lights"
                                    location="In the heart of Colombo"
                                    description="Experience the vibrant city life"
                                />
                            </Slider>
                        </div>
                        <div className="hidden md:flex justify-between space-x-4">
                            <Card
                                imageUrl={beach}
                                title="Beach Paradise"
                                location="1 hour from Nuwara Eliya"
                                description="A beautiful place to visit"
                            />
                            <Card
                                imageUrl={beach}
                                title="Mountain Escape"
                                location="2 hours from Kandy"
                                description="A serene mountain retreat"
                            />
                            <Card
                                imageUrl={beach}
                                title="City Lights"
                                location="In the heart of Colombo"
                                description="Experience the vibrant city life"
                            />
                        </div>
                    </div>
                </div>
                <CenteredLine />
            </div>
            <div className="mt-2.5">
                <Footer/>
            </div>
        </>
    );
};

export default Home;

