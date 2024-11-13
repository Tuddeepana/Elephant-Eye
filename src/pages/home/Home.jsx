import Footer from "../../utils/Footer.jsx";
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import HomeCover from "../../assets/subPages/HomeCover.jsx";
import Card from "../../assets/Components/Cards/Card.jsx";
import CenteredLine from "../../assets/Components/Divider/CenteredLine.jsx";

import beach from "../../assets/img/Lndpg_Imgs/beach.jpg";

const Home = () => {
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

                <div className="flex flex-wrap justify-center items-center space-x-4 mt-8">
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
                <CenteredLine />
            </div>
            <div className="mt-2.5">
                <Footer/>
            </div>
        </>
    );
};

export default Home;