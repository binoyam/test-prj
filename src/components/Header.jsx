import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className="auth_links">
        <Link className="auth_link login_link" to="/login">
          Login
        </Link>
        <Link className="auth_link signup_link" to="/signup">
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
