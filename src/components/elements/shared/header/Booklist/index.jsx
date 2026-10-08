import { Link } from 'react-router-dom';
import books from '../../../../../utils/books';

export default function BookList() {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={`https://picsum.photos/seed/${book.seed}/400/225`}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '225px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text flex-grow-1">{book.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-muted fw-bold">{book.price}</small>
                    <div className="btn-group">
                      <Link to={`/book/${book.id}`} className="btn btn-sm btn-outline-primary">
                        View
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Cart
                      </button>
                    </div>
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