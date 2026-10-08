export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dinda Jufita Hamida",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "Pecinta buku sejati yang memiliki visi memajukan literasi di Indonesia.",
      color: "#667eea",
    },
    {
      name: "Arjuanda Denniansyah",
      role: "Head of Marketing",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Ahli strategi digital yang selalu mencari cara baru untuk menjangkau pembaca.",
      color: "#764ba2",
    },
    {
      name: "Nur Jihan",
      role: "Lead Editor",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      desc: "Memastikan setiap buku yang terbit memiliki kualitas tulisan terbaik.",
      color: "#f093fb",
    },
    {
      name: "Anwar Sanusy",
      role: "Tech Lead",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      desc: "Pengembang aplikasi web yang membuat pengalaman belanja buku jadi mudah.",
      color: "#4facfe",
    },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Hero Section */}
      <div 
        className="text-center py-5 mb-5"
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '0 0 50px 50px'
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Tim Kami</h1>
        <p className="lead mb-0" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Orang-orang hebat di balik layar Penjualan Buku
        </p>
      </div>

      {/* Team Cards */}
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {teamMembers.map((member, index) => (
            <div className="col" key={index}>
              <div 
                className="card h-100 border-0 team-card"
                style={{ 
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '130px', 
                      height: '130px',
                      background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
                      padding: '4px'
                    }}
                  >
                    <img
                      src={member.img}
                      className="rounded-circle"
                      style={{ 
                        width: '122px', 
                        height: '122px', 
                        objectFit: 'cover',
                        border: '3px solid white'
                      }}
                      alt={member.name}
                    />
                  </div>
                  <h5 className="card-title fw-bold mb-1" style={{ color: '#2c3e50' }}>
                    {member.name}
                  </h5>
                  <p 
                    className="small fw-bold text-uppercase mb-3"
                    style={{ 
                      color: member.color,
                      letterSpacing: '1px'
                    }}
                  >
                    {member.role}
                  </p>
                  <p className="card-text text-muted small">
                    {member.desc}
                  </p>
                </div>
                <div className="card-footer bg-white border-0 pb-4 pt-0">
                  <div className="d-flex justify-content-center gap-2">
                    <a 
                      href="#" 
                      className="btn btn-sm"
                      style={{ 
                        background: '#e3f2fd', 
                        color: '#1976d2',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      
                    </a>
                    <a 
                      href="#" 
                      className="btn btn-sm"
                      style={{ 
                        background: '#e8f5e9', 
                        color: '#388e3c',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      💼
                    </a>
                    <a 
                      href="#" 
                      className="btn btn-sm"
                      style={{ 
                        background: '#fce4ec', 
                        color: '#c2185b',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      📧
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}