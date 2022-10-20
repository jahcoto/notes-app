import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

import '../styles/layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
