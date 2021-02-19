import React from "react";

export default function Services() {
  return (
    <div className="row py-5 bgGray">
      <div className="col-md my-5">
        <div className="card text-center">
          <img
            className="img-fluid img-thumbnail"
            src="https://media.istockphoto.com/vectors/school-student-conversation-with-principal-teacher-interview-vector-id603152548"
            alt="student interview"
          />
        </div>
      </div>
      <div className="col-md my-5">
        <h2 className="fw-bold fs-2 text-end me-5">
          The more services we provide for our students
        </h2>
        <p className="fw-normal mt-3 text-end me-5">
          Teacher open the door, but you must enter by yourself
        </p>
        <div className="border border-1 border-secondary rounded py-5 px-5 me-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card mx-5 shadow p-3 mb-5 bg-white rounded">
                <h5 className="card-title">Get a Certificate</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  accusantium quibusdam nulla, tenetur fuga repellat provident
                  magni quas eos ab.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mx-5 shadow p-3 mb-5 bg-white rounded">
                <h5 className="card-title">Expert Instructors</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  accusantium quibusdam nulla, tenetur fuga repellat provident
                  magni quas eos ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
