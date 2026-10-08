import { useParams, Link } from 'react-router-dom';
import books from '../utils/books';

export default function Book() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id)) || books[0];

  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">Detail Buku</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://picsum.photos/seed/${book.seed}/600/400`}
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{book.title}</h2>
          <p className="lead text-muted">{book.desc}</p>
          <h3 className="fw-bold text-primary mt-4">{book.price}</h3>
          <button className="btn btn-primary btn-lg mt-3">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}