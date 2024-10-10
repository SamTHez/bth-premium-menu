const Header = () => {
    const location = "Horsham";

    return(
        <div id="header">
            <h1>Bury the Hatchet Premium Menu</h1>
            <div id="location-info">
                <h2>Current Location: {location}</h2>
                <button id="change-location">Change Location?</button>
            </div>
        </div>
    )
};

export default Header;