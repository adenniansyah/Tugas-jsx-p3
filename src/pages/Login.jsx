import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login berhasil → kembali ke home
    navigate('/');
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-center py-5 mb-5"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '0 0 50px 50px',
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Masuk Akun</h1>
        <p className="lead mb-0" style={{ fontSize: '1.1rem', opacity: 0.95 }}>
          Selamat datang kembali di Toko Buku TK ADINDA
        </p>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div
              className="card border-0"
              style={{
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              }}
            >
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4 text-center" style={{ color: '#2c3e50' }}>
                  🔐 Sign In
                </h3>

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label fw-bold small text-uppercase"
                      style={{ color: '#667eea', letterSpacing: '1px' }}
                    >
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        borderRadius: '12px',
                        border: '2px solid #e9ecef',
                        padding: '12px 16px',
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label fw-bold small text-uppercase"
                      style={{ color: '#667eea', letterSpacing: '1px' }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{
                        borderRadius: '12px',
                        border: '2px solid #e9ecef',
                        padding: '12px 16px',
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                        style={{ borderRadius: '4px' }}
                      />
                      <label className="form-check-label small" htmlFor="remember">
                        Ingat saya
                      </label>
                    </div>
                    <a
                      href="#"
                      className="small text-decoration-none"
                      style={{ color: '#667eea' }}
                    >
                      Lupa password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 fw-bold text-white mb-3"
                    style={{
                      borderRadius: '12px',
                      padding: '14px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    }}
                  >
                    🚀 Masuk
                  </button>

                  <div className="text-center my-3">
                    <span className="text-muted small">atau masuk dengan</span>
                  </div>

                  <div className="d-flex gap-2 mb-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary flex-fill"
                      style={{ borderRadius: '12px' }}
                    >
                      🔵 Google
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary flex-fill"
                      style={{ borderRadius: '12px' }}
                    >
                      📘 Facebook
                    </button>
                  </div>

                  <p className="text-center text-muted mb-0 small">
                    Belum punya akun?{' '}
                    <Link
                      to="/register"
                      className="fw-bold text-decoration-none"
                      style={{ color: '#667eea' }}
                    >
                      Daftar di sini
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}