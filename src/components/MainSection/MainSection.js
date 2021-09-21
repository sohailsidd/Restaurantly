import About from "../About/About";
import Why from "../Why/Why";
import Galary from "../Gallery/Gallery";
import Events from "../Events/Events";
import Reservation from "../Reservation/Reservation";
import Contect from "../Contect/Contect";
import Chif from "../Chif/Chif";

function MainSection() {
    return (
        <div>
            <About />
            <Why />
            <Galary />
            <Events />
            <Reservation />
            <Chif /> 
            <Contect />
        </div>
    );
}

export default MainSection;