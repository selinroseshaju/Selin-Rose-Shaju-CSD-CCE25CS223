import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-shell section-spacing">
      <div className="container not-found-box">
        <p className="eyebrow">404 Error</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="primary-btn inline-btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
