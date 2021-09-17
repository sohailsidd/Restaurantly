import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import MainSection from "../components/MainSection/MainSection"; 

function Main() {
    return (
        <>
            <div className="position-relative overflow-hidden">
                <Navigation />
                <Hero />
                <MainSection />
            </div>
        </>
    );
}

export default Main;