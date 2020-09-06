import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li onClick={() => props.onSearch("Cats")}><NavLink to='/cats'>Cats</NavLink></li>
          <li onClick={() => props.onSearch("Dogs")}><NavLink to='/dogs'>Dogs</NavLink></li>
          <li onClick={() => props.onSearch("Bugs")}><NavLink to='/computers'>Bugs</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;