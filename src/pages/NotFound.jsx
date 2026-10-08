import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <h2 className="fw-bold mb-3">Halaman Tidak Ditemukan</h2>
      <p className="text-muted mb-4">URL yang kamu tuju tidak ada di toko buku kami.</p>
      <Link to="/" className="btn btn-primary btn-lg px-4">
        Kembali ke Home
      </Link>
    </div>
  );
}