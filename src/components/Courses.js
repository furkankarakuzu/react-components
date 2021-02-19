import React from "react";

export default function Courses() {
  return (
    <div className="bgGray bg-gradient">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="fs1 fw-bold">
                  The world's largest online educational institution
                </h2>
              </div>
              <div className="border border-1 border-secondary rounded py-5 px-5 my-5">
                <div className="row">
                  <div className="col-sm">
                    <div className="bgGray border shadow text-center pt-4 pb-2">
                      <div className="courseCards"> </div>
                      <h5 className="fw-bold mb-3 mt-1">110</h5>
                      <h6 className="fw-bold mb-3">Total Courses</h6>
                      <p className="px-3 fs12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod, repudiandae.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm ms-lg-5">
                    <div className="bgGray border shadow text-center pt-4 pb-2">
                      <div className="courseCards"> </div>
                      <h5 className="fw-bold mb-3 mt-1">
                        5k<sup>+</sup>{" "}
                      </h5>
                      <h6 className="fw-bold mb-3">Total Courses</h6>
                      <p className="px-3 fs12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod, repudiandae.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm">
                    <div className="bgGray border shadow text-center pt-4 pb-2">
                      <div className="courseCards"> </div>
                      <h5 className="fw-bold mb-3 mt-1">
                        4M<sup>+</sup>{" "}
                      </h5>
                      <h6 className="fw-bold mb-3">Total Courses</h6>
                      <p className="px-3 fs12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod, repudiandae.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm ms-lg-5">
                    <div className="bgGray border shadow text-center pt-4 pb-2">
                      <div className="courseCards"> </div>
                      <h5 className="fw-bold mb-3 mt-1">
                        7th<sup>+</sup>{" "}
                      </h5>
                      <h6 className="fw-bold mb-3">Total Courses</h6>
                      <p className="px-3 fs12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod, repudiandae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg my-auto mx-auto">
            <p className="text-end">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio maxime odio iusto? Mollitia, quae error.
            </p>
            <div className="ps-lg-5 img-fluid img-thumbnail">
              <iframe
                className="ms-3"
                width="415"
                height="480"
                src="https://www.youtube.com/embed/M5Iu7AZ2Njg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
