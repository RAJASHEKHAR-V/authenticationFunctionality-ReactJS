import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-card">
    <Link to="/" className="list-style">
      <li>Home</li>
    </Link>
    <Link to="/about" className="list-style">
      <li>About</li>
    </Link>
  </nav>
)

export default Header
