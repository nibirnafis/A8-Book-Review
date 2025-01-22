import Books from "./Books/Books";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <div>
            <div className="w-[1170px] m-auto">
                <HeroSection></HeroSection>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;