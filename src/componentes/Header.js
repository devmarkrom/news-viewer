import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a href="#noticias" className="brand-logo center">{props.titulo}</a>
            </div>
        </nav>
    );
};

export default Header;