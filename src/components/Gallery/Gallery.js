import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Gallery() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <div className="gallery py-5">
                <div className="container mb-5" data-aos-delay="100"  data-aos="fade-up">
                    <div className="row">
                        <div className="col">
                            <div className="heading mb-2">GALLARY</div>
                            <div className="title">Some photos from Our Restaurant</div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row gx-0 gy-0">
                        {
                            array.map((value)  => {
                                return <div className="col-lg-3 col-md-4">
                                    <img className="b" src={require(`../../images/gallery/gallery-${value}.jpg`).default} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;