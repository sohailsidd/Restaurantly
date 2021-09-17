import NavBar from "./NavBar";

function BottomBar() {
    return (
        <>
            <div className="bottombar">
                <div className="container gx-sm-0 gx-3 gx-0">
                    <h1 className="h2">restaurantly</h1>
                    <NavBar />
                    <button className="ms-auto d-xl-block d-none" >book a table</button>
                    <i className="fas fa-bars fs-5 d-lg-none d-block ms-auto"></i>
                </div>
            </div>
        </>
    );
}

export default BottomBar;