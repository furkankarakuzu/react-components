import React from "react";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md py-3 navbar-light bg-white">
      <div className="container">
        <a href="index.html" className="navbar-brand me-3">
          <img
            src="https://icon-library.com/images/quote-icon-png/quote-icon-png-27.jpg"
            width="45"
            alt="logo"
            className="d-inline-block align-middle mr-2"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item ms-5">
              <a href="index.html" className="nav-link text-secondary fw-bold">
                Home
              </a>
            </li>
            <li className="nav-item ms-5">
              <a
                href="aboutus.html"
                className="nav-link text-secondary fw-bold"
              >
                About Us
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="#" className="nav-link text-secondary fw-bold">
                Course
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="#" className="nav-link text-secondary fw-bold">
                Contact
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="#" className="nav-link text-secondary fw-bold">
                Pricing
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="#" className="nav-link text-danger fw-bold">
                Sign Up
              </a>
            </li>
            <li className="nav-item ms-5">
              <a
                href="#"
                className="nav-link text-light rounded-3 bg-danger fw-bold"
              >
                Free Trial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
