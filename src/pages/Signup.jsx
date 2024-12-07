import './Login.css';
import { Link } from 'react-router-dom';
import './Login.css';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
const Signup = () => {
  return (
    <div className="auth_page_login">
      <Link className="backto_home_btn" to={'/'}>
        <IoArrowBackCircleSharp className="icon_back" />
        Back to website
      </Link>
      <div className="login_form">
        <h2>Create Account</h2>

        <form>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              className="login_input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              className="login_input"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Confirm Password</label>
            <input
              className="login_input"
              type="password"
              id="password"
              name="confirmPassword"
              required
            />
          </div>
          <button className="login_btn" type="submit">
            Login
          </button>
          <span className="form_option">
            Already have an Account?{' '}
            <Link className="form_hdr_link" to={'/login'}>
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
