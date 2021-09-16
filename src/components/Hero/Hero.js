import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    },[])

    return (
        <>
            <div className="hero">
                <div className="container-lg" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-10 gx-0 text-lg-start text-center welcome">
                            <h1 >Welcome to 
                                <span> Restaurantly</span>
                            </h1>
                            <h2 className="h2">Delivering great food for more than 18 years!</h2>
                            <button>OUR MENU</button>
                            <button className="ms-4">BOOK A TABLE</button>
                        </div>  
                        <div className="col-lg-2 mt-4 play">
                            <div className="play-btn"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;