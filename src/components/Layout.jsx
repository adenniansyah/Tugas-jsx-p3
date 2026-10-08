import { Outlet, Link } from 'react-router-dom';
import Header from './elements/shared/header';

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer className="py-3 text-bg-dark mt-auto">
        <div className="container">
          <ul className="nav justify-content-center border-bottom border-secondary pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-white-50">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/book" className="nav-link px-2 text-white-50">Book</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-white-50">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-white-50">Contact</Link>
            </li>
          </ul>
          <p className="text-center text-white-50 mb-0">© 2026 TK ADINDA</p>
        </div>
      </footer>
    </div>
  );
}