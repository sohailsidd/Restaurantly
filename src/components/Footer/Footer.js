import  NavLink  from "./NavLink";
import FooterIcon from "./FooterIcon";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="row justify-content-md-between text-md-start text-center">
                            <div className="col-xl-3 col-md-5 mb-xl-0 mb-5">
                                <p className="d-1">RESTAURANTLY</p>
                                <p className="dis-1 mt-4">A108 Adam Street</p>
                                <p className="dis-1">NY 535022, PAK</p>
                                <p className="dis-1 mt-4">Phone: +1 5589 55488 55</p> 
                                <p className="dis-1">Email: info@example.com</p>
                                <FooterIcon iconClass={["fab fa-twitter", "fab fa-facebook-f", "fab fa-instagram", "fab fa-skype", "fab fa-linkedin-in"]}/>
                            </div>
                            <div className="col-xl-2 col-md-5 mb-xl-0 mb-5">
                                <NavLink heading="Useful Links" links={[ "Home", "About us", "Services", "Terms of service", "Privacy policy"]}/>
                            </div>
                            <div className="col-xl-2 col-md-5 mb-lg-0 mb-5">
                                <NavLink heading="Our Services" links={[ "Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"]}/>
                            </div>
                            <div className="col-xl-4 col-md-5 mb-lg-0 mb-5">
                                <div className="news">
                                    <div className="heading mb-4">Our Newsletter</div>
                                    <div className="mb-4">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</div>
                                    <div className="subscribe">
                                        <form>
                                            <input type="text" />
                                        </form>
                                        <button>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copy-dis1">© Copyright 
                        <span> Restaurantly</span>
                        . All Rights Reserved
                    </p>
                    <p  className="copy-dis2 pt-2">Designed by 
                        <span className="color-brown">&nbsp;SohailSiddique</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;