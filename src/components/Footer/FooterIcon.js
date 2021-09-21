function FooterIcon(props) {
    return (
        <>
            <div className="footer-icon-container d-flex justify-content-md-start justify-content-center mt-4">
                {props.iconClass.map((values) => {
                    return <div key={ values } className="footer-icon">
                        <i className={values}></i>
                    </div>
                })}
            </div>
        </>
    );
}

export default FooterIcon;