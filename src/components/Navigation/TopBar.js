function TopBar() {
    return (
        <>
            <div className="container justify-content-md-between justify-content-center topbar">
                <div className="info">
                    <i className="fal fa-mobile"></i>
                    <span>+1 5589 55488 55</span>
                    <i className="fal fa-clock"></i>
                    <span>Mon-Sat: 11AM - 23PM</span>
                </div>
                <div className="bredcrum d-md-block d-none">
                    <span>En</span>
                    <span>De</span>
                </div>
            </div>
        </>
    );
}

export default TopBar;