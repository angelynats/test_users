import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="pt-5 mt-5">
      <div className="container pt-5">
        <section className="d-flex flex-column align-items-center">
          <h1 className="mb-4">Error 404</h1>

          <p className="h4 mb-5">Oops! Page not found.</p>
          <Link to="/">
            <button className="btn btn-secondary btn-lg">Back to Home</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Error404;
