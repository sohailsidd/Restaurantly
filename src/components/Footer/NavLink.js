function NavLink(props) {
    return (
        <>
            <div className="link-container">
                <div className="nav-heading mb-4">{ props.heading }</div>

                {props.links.map((values) => {
                    return <div key={values} className="mt-3">
                        <i className="fas fa-chevron-right nav-icon">&nbsp;&nbsp;&nbsp;&nbsp;</i>
                        <span className="linkitem">{values}</span>
                    </div>
                })}
            </div>
        </>
    );
}

export default NavLink;