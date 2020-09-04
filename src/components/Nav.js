import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li onClick={() => props.onSearch("cats")}><NavLink to='/cats'>Cats</NavLink></li>
          <li onClick={() => props.onSearch("dogs")}><NavLink to='/dogs'>Dogs</NavLink></li>
          <li onClick={() => props.onSearch("computers")}><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;