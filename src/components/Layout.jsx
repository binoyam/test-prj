import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main className="main_content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
