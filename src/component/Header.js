import React from 'react';

const Header = () => {
    return (
        <header id="header" className="header">
            <a href = ""
            onClick = {
                () => window.location.reload()
            }> <div className="cross"></div></a>
            <div className="ttl eemo">Eemo</div>
            <div className="ttl upload">upload</div>
        </header>
    )
}

export default Header;