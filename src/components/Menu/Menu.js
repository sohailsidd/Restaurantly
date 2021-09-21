import Section from "../General/Section";

function Menu() {
    return (
        <>
            <Section sectionName="menu" heading="menu" title="Check Our Tasty Menu" 
                code={
                    () => {
                        return (
                            <>
                            <div className="col-12 filterbox"></div>
                            <div className="col-12 items"></div>
                        </>
                    );
                }
            }/>
        </>
    );
}

export default Menu;