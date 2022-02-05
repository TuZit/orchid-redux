import React from "react";
import "./404.scss";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div id="error-page">
      <h1>404</h1>
      <div className="error-page__line" />
      <p>
        We are sorry but the page you are looking for does not exist. Please try
        searching again or click on the button below to continue exploring
        website.
      </p>
      <Link to="/">
        <button className="btn">BACK TO HOMEPAGE</button>
      </Link>
    </div>
  );
}

export default Page404;
