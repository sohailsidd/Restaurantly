import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section from "../General/Section";

function Why() {

    const content = [["01", "Lorem Ipsum", "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"], ["02", "Repellat Nihil", "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"], ["03", "Ad ad velit qui", "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"]];

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    },[])

    return (
        <>
            <Section sectionName="why" heading="why us" title="Why Choose Our Restaurant" 
            code={
                () => {
                    return (
                        <>
                            {
                                content.map((value) => {
                                    return <div key={ value[0] } data-aos="zoom-in" className="col-lg-4">
                                        <div className="box mb-4 px-4 py-5">
                                            <h1>{ value[0] }</h1>
                                            <h2 className="h3">{ value[1] }</h2>
                                            <p className="h5" >{ value[2] }</p>
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

export default Why;