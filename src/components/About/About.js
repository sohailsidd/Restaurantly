import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image from "../../images/Background/about.jpg";

function About() {

    const text = ["Ullamco laboris nisi ut aliquip ea commodo consequat.", "Duis irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."];

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <section className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 my-lg-0 my-5 order-lg-2">
                            <div className="about-img" data-aos="zoom-in">
                                <img src={ image } alt="missing" />
                            </div>
                        </div>
                        <div className="col-lg-6 dis">
                            <h1 className="h3">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul>
                                {
                                    text.map((para) => {
                                        return <li>
                                            <i key={para} className="far fa-check-circle">
                                                <span>{ para }</span>
                                            </i>
                                        </li>
                                    })
                                }
                            </ul>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;