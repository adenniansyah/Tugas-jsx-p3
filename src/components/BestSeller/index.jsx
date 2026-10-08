export default function BestSeller() {
  return (
    <section 
      className="py-5 text-center container"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <span 
            className="badge mb-3 px-3 py-2"
            style={{ 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              fontSize: '0.85rem',
              letterSpacing: '1px'
            }}
          >
            🔥 TRENDING
          </span>
          <h1 className="fw-bold display-5 mb-3" style={{ color: '#2c3e50' }}>
            Best Seller Bulan Ini
          </h1>
          <p className="lead" style={{ color: '#5a6c7d' }}>
            Koleksi buku terbaik yang paling banyak dibaca dan direkomendasikan oleh komunitas kami.
          </p>
        </div>
      </div>
    </section>
  );
}