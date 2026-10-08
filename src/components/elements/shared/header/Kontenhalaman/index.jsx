export default function Hero() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div className="container my-5">
        <div 
          className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            border: 'none'
          }}
        >
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <span 
              className="badge mb-3 px-3 py-2"
              style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                fontSize: '0.85rem',
                letterSpacing: '1px'
              }}
            >
              📚 BUKU TERLARIS
            </span>
            <h1 className="display-4 fw-bold lh-1 mb-3" style={{ color: '#2c3e50' }}>
              The Psychology of Money
            </h1>
            <p className="lead mb-4" style={{ color: '#5a6c7d', lineHeight: '1.8' }}>
              Pelajaran Mengenai Uang dan Kehidupan. Berbeda dari buku keuangan pada umumnya yang penuh rumus, buku ini mengajarkan cara berpikir tentang uang dengan lebih bijak.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button 
                type="button" 
                className="btn btn-lg px-4 me-md-2 fw-bold text-white"
                style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 28px',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
              >
                🛒 Beli Sekarang
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary btn-lg px-4"
                style={{ 
                  borderRadius: '12px',
                  padding: '12px 28px',
                  borderWidth: '2px'
                }}
              >
                 Detail Buku
              </button>
            </div>
            <div className="d-flex gap-4 mt-4">
              <div>
                <h4 className="fw-bold mb-0" style={{ color: '#667eea' }}>4.8⭐</h4>
                <small className="text-muted">Rating</small>
              </div>
              <div>
                <h4 className="fw-bold mb-0" style={{ color: '#667eea' }}>10K+</h4>
                <small className="text-muted">Terjual</small>
              </div>
              <div>
                <h4 className="fw-bold mb-0" style={{ color: '#667eea' }}>256</h4>
                <small className="text-muted">Halaman</small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-end-4 w-100"
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
              alt="Buku Psychology of Money"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}