import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section from "../General/Section";

function Chif() {

    const value = 1;
    const info = [["Walter White", "Master Chef", 1], ["Sarah Jhonson", "Patissier", 2], ["William Anderson", "Cook", 3]];
    const iconClasses = ["fab fa-twitter", "fab fa-facebook-f", "fab fa-instagram", "fab fa-skype", "fab fa-linkedin-in"];

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <Section sectionName="chef" heading="chefs" title="Our Proffesional Chefs" 
                code={
                    () => {
                        return (
                            <>
                            {
                                info.map((person) => {
                                    return <div className="col-lg-4 col-md-6">
                                                <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                                <img src={require(`../../images/chefs/chefs-${person[2]}.jpg`).default} className="img-fluid" alt="missing" />
                                                <div className="member-info">
                                                <div className="member-info-content">
                                                    <h4>{person[0]}</h4>
                                                    <span>{person[1]}</span>
                                                </div>
                                                <div className="social">
                                                    {
                                                        iconClasses.map((c) => {
                                                            return <a href="/"><i className={ c }></i></a>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </>
                    );
                }
            }/>
        </>
    );
}

export default Chif;