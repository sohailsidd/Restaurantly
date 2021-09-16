import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";

function Main() {
    return (
        <>
            <div className="position-relative overflow-hidden">
                <Navigation />
                <Hero />
            </div>
        </>
    );
}

export default Main;