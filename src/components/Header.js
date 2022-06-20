import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
        </nav>
  )
}
export default Header;
