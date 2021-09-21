import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Reservation() {

    const text = ["Your Name", "Your Email", "Your Phone", "Date", "Time", "# of people"];
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <div className="reservation py-5">
                <div className="container" data-aos="fade-up">
                    <div className="row mb-4">
                        <div className="heading mb-2">RESERVATION</div>
                        <div className="title">Book a Table</div>
                    </div>
                    <form>
                        <div className="row first-textbox">
                            {
                                text.map((value) => {
                                    return <div className="col-lg-4 col-md-6 px-3">
                                        <input type="text"  placeholder={ value }/>
                                    </div>
                                })
                            }
                            <div className="col-12">
                                <textarea placeholder="Message" />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <button>Book A Table</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Reservation;