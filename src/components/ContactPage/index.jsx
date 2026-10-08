export default function ContactPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 mb-3" style={{ color: '#2c3e50' }}>
          Hubungi Kami
        </h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Punya pertanyaan atau saran? Kami senang mendengar dari Anda.
          Tim kami siap membantu Anda 24/7.
        </p>
      </div>

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
            <div className="card-body p-5">
              <h3 className="mb-4 fw-bold" style={{ color: '#2c3e50' }}>✉️ Kirim Pesan</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Nama Lengkap</label>
                  <input type="text" className="form-control form-control-lg" id="name" placeholder="Masukkan nama Anda" style={{ borderRadius: '10px' }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Alamat Email</label>
                  <input type="email" className="form-control form-control-lg" id="email" placeholder="nama@email.com" style={{ borderRadius: '10px' }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold">Subjek</label>
                  <input type="text" className="form-control form-control-lg" id="subject" placeholder="Apa yang bisa kami bantu?" style={{ borderRadius: '10px' }} />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">Pesan</label>
                  <textarea className="form-control form-control-lg" id="message" rows="5" placeholder="Tulis pesan Anda di sini..." style={{ borderRadius: '10px' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold" style={{ borderRadius: '10px', padding: '12px' }}>
                   Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card-body p-5 text-white">
              <h3 className="mb-4 fw-bold">📍 Informasi Kontak</h3>
              <div className="mb-4 d-flex align-items-start">
                <div className="fs-2 me-3">📍</div>
                <div>
                  <h6 className="fw-bold mb-1 fs-5">Alamat Kantor</h6>
                  <p className="mb-0 opacity-75">Jl. Literasi No. 123, Jakarta Selatan, Indonesia 12345</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <div className="fs-2 me-3">📧</div>
                <div>
                  <h6 className="fw-bold mb-1 fs-5">Email</h6>
                  <p className="mb-0 opacity-75">hello@penjualanbuku.com</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <div className="fs-2 me-3">📞</div>
                <div>
                  <h6 className="fw-bold mb-1 fs-5">Telepon</h6>
                  <p className="mb-0 opacity-75">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <div className="fs-2 me-3">⏰</div>
                <div>
                  <h6 className="fw-bold mb-1 fs-5">Jam Operasional</h6>
                  <p className="mb-0 opacity-75">Senin - Jumat: 09.00 - 17.00 WIB</p>
                </div>
              </div>
              <hr className="my-4 opacity-25" />
              <h5 className="fw-bold mb-3">Ikuti Kami</h5>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-light btn-lg" style={{ borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📘</a>
                <a href="#" className="btn btn-outline-light btn-lg" style={{ borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📷</a>
                <a href="#" className="btn btn-outline-light btn-lg" style={{ borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🐦</a>
                <a href="#" className="btn btn-outline-light btn-lg" style={{ borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>▶️</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="card shadow-lg border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3983.2601143648412!2d117.59379007497176!3d3.285587996689353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMTcnMDguMSJOIDExN8KwMzUnNDYuOSJF!5e0!3m2!1sid!2sid!4v1791473318755!5m2!1sid!2sid" 
            width="100%" 
            height="350" 
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy"
            title="Lokasi Kantor"
          ></iframe>
        </div>
      </div>
    </div>
  );
}