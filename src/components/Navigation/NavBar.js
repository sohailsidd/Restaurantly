import DropDown from "./DropDown";

function NavBar() {
    return (
        <>
            <div className="nav-bar d-lg-block d-none">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Specials</li>
                    <li>Events</li>
                    <li>Chefs</li>
                    <li>Galary</li>
                    <DropDown  nested={<DropDown  nested={<DropDown />} />}/>
                    <li>Contect</li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;