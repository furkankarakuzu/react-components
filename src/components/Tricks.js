import React from "react";

export default function Tricks() {
  const fs = {
    fontSize: "1.1rem"
  };
  return (
    <div className="row p-5 bgGray">
      <div className="container px-5">
        <h2 className="fs-2 fw-bold">Best Tricks & Trips Videos</h2>
        <p className="text-break fw-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
          quis!
        </p>
        <div className="row">
          <div className="col-md">
            <div className="rounded bgGray">
              <iframe
                width="240"
                height="161"
                src="https://www.youtube.com/embed/SJOnhWiJArM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">English best trips</h5>
                <p className="card-text">
                  The beautiful thing about learning is that no one can take it
                  away from you.
                </p>
                <div className="row">
                  <div className="col-sm-12 mt-2">
                    <a
                      href="#"
                      className="text-danger text-decoration-none fw-bold"
                    >
                      Learn more <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md ms-lg-5">
            <div className="rounded bgGray">
              <iframe
                width="240"
                height="161"
                src="https://www.youtube.com/embed/xDyJkFehDk0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">Science best trips</h5>
                <p className="card-text">
                  The beautiful thing about learning is that no one can take it
                  away from you.
                </p>
                <div className="row">
                  <div className="col-sm-12 mt-2">
                    <a
                      href="#"
                      className="text-danger text-decoration-none fw-bold"
                    >
                      Learn more <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md ms-lg-5">
            <div className="rounded bgGray">
              <iframe
                width="240"
                height="161"
                src="https://www.youtube.com/embed/NQpO6q5W9T8"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="card-body">
                <h5 className="card-title fs-5 fw-bold">Best known History</h5>
                <p className="card-text">
                  The beautiful thing about learning is that no one can take it
                  away from you.
                </p>
                <div className="row">
                  <div className="col-sm-12 mt-2">
                    <a
                      href="#"
                      className="text-danger text-decoration-none fw-bold"
                    >
                      Learn more <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md ms-lg-5">
            <div className="rounded bgGray">
              <iframe
                width="240"
                height="161"
                src="https://www.youtube.com/embed/OmJ-4B-mS-Y"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="card-body">
                <h5 className="card-title fw-bold" style={fs}>
                  All solution Math Video
                </h5>
                <p className="card-text">
                  The beautiful thing about learning is that no one can take it
                  away from you.
                </p>
                <div className="row">
                  <div className="col-sm-12 mt-2">
                    <a
                      href="#"
                      className="text-danger text-decoration-none fw-bold"
                    >
                      Learn more <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
