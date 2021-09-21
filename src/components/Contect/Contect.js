import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section from "../General/Section";

function Contect() {

    const data = [["Location:", "A108 Adam Street, New York", "fal fa-map-marker-alt"],["Open Hours:", "11:00 AM - 2300 PM", "fal fa-clock"],["Email:", "info@example.com", "fal fa-envelope"],["Call:", "+1 5589 55488 55s", "fal fa-mobile"]];
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <Section sectionName="contect" heading="contect" title="Contect Us" 
                code={
                    () => {
                        return (
                            <>
                            <div className="col-12 mb-5">
                            <div data-aos="fade-up">
                                <iframe style={{border:"0", width: "100%", height: "350px"}} frameborder="0" title="s" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"></iframe>
                            </div>
                            </div>
                            <div className="col-12">
                                <div className="row gx-0">
                                    <div className="col-lg-4 contect-info" data-aos="fade-up" >
                                        <ul>
                                            {
                                                data.map((item) => {
                                                    return <li key={ item[0] } className=" mb-4">
                                                        <div>
                                                            <div className="circle">
                                                                <i className={item[2] + " fs-4"}></i>
                                                            </div>
                                                        </div>
                                                        <div className="mx-3">
                                                            <h6 className="mt-1">{item[0]}</h6>
                                                            <p>{item[1]}</p>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-lg-8" data-aos="fade-up">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }
            }/>
        </>
    );
}

export default Contect;