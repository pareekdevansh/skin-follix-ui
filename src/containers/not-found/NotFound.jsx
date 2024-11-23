import React from "react";
import { Link } from "react-router-dom";
import "./404Page.css"; // Importing CSS for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-header">404</h1>
        <h2 className="not-found-subheader">Oops! Page Not Found</h2>
        <p className="not-found-text">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="not-found-link">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
