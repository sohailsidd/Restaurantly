import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Events() {

    const owlContent =  [["Custom Parties","$99", 1], ["Birthday Parties","$189", 2], ["Private Parties","$290", 3]];
    const text = ["Ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit.", "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute."];
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])
    
    return (
        <>
            <div className="events">
                <div className="container" data-aos="fade-up">
                    <div className="row mb-4">
                        <div className="name mb-2">Events</div>
                        <div className="heading">Organize Your Events in our Restaurant</div>
                    </div>
                    <OwlCarousel className="owl-theme" items={1} rewind={ true } autoplay={true}>
                        {
                            owlContent.map((value) => {
                                return <div className="container" data-aos-delay="100"  data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-lg-6 owl mb-5">
                                            <img src={require(`../../images/EventSlider/e${value[2]}.jpg`).default} alt="" />
                                        </div>
                                        <div className="col-lg-6 content">
                                            <div className="heading">{ value[0]}</div>
                                            <div>
                                                <span className="rate">{ value[1]}</span>
                                            </div>
                                            <div className="text-1 mt-3">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            {
                                                text.map((value) => {
                                                    return <div key={ value } className="ulm">{ value }</div>
                                                })
                                            }
                                            <div className="text-last">
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </>
    );
}

export default Events;