import React from "react";

export default function Header() {
  return (
    <div className="bgGray">
      <div className="container">
        <div className="row">
          <div className="col-sm mt-auto mb-auto">
            <h2 className="fs-1 fw-bold">
              The more you read, the more you will learn
            </h2>
            <p className="text-break fw-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
              libero, eum reprehenderit id ut ipsam saepe, voluptates eaque
              consequatur dignissimos.
            </p>
            <button className="btn btn-success ps-4 pe-4 pt-2 pb-2 fw-normal btnRadius">
              Contact Us
            </button>
            <button className="btn btn-danger ms-lg-3 ps-4 pe-4 pt-2 pb-2 fw-normal btnRadius">
              Get Started
            </button>
          </div>
          <div className="col-sm mt-auto mb-auto text-center">
            <img
              className="img-fluid img-thumbnail"
              src="https://www.artbyalysia.com/uploads/6/1/6/5/61653353/20180212-161803-1518470297097-001_orig.jpg"
              alt="student is here"
              width="350vw"
              height="350vh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
