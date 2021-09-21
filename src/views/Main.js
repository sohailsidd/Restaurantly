import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import MainSection from "../components/MainSection/MainSection"; 
import Footer from "../components/Footer/Footer";

function Main() {
    return (
        <>
            <div className="position-relative overflow-hidden">
                <Navigation />
                <Hero />
                <MainSection />
                <Footer />
            </div>
        </>
    );
}

export default Main;