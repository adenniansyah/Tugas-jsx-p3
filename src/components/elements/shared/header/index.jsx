import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255,255,255,.5)',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    padding: '0.5rem 1rem'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/book');
  };

  return (
    <header className="p-3 text-bg-dark sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" viewBox="0 0 16 16" fill="currentColor" role="img" aria-label="Buku">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            <span className="fs-4 fw-bold">Penjualan Buku</span>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" style={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/book" style={linkStyle}>Book</NavLink></li>
            <li><NavLink to="/team" style={linkStyle}>Team</NavLink></li>
            <li><NavLink to="/contact" style={linkStyle}>Contact</NavLink></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>

          <div className="text-end">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/login" className="btn btn-warning">Register</Link>
         </div>
        </div>
      </div>
    </header>
  );
}