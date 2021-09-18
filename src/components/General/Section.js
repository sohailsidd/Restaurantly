import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Section(props) {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <section className={ props.sectionName }>
                <div className="container" data-aos="fade-up">
                    <h5 className="heading">{ props.heading }</h5>
                    <h2 className="title">{ props.title }</h2>
                    <div className="row">{ props.code() }</div>
                </div>
            </section>
        </>
    );
}

export default Section;