import React from 'react';

const NavBar = ({totalValues})=> {

    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <span className="badge badge-pill badge-secondary">{totalValues}</span>
                </a>
        </nav>
     );
};
 
export default NavBar;