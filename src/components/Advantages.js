import React from "react";
function Advantage(props) {
  return (
    <div className="col-md mt-5 me-lg-5">
      <div className="rounded bgGray">
        <img
          src={props.imgSrc}
          className="advantagesLogos mt-3 ms-3"
          alt="mathematics logo"
        />
        <div className="card-body">
          <h5 className="card-title fs-5 fw-bold">Mathematics</h5>
          <p className="card-text">
            The beautiful thing about learning is that no one can take it away
            from you.
          </p>
          <a href="#" className="text-decoration-none text-danger fw-bold">
            Learn more <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default function Advantages() {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="fs-2 fw-bold">Your Advantages</h2>
        <p className="text-break fw-normal">
          Teacher open the door, but you must enter by yourself.
        </p>
      </div>
      <div className="row">
        <Advantage imgSrc="https://cdn.pixabay.com/photo/2017/09/05/15/52/pi-2718206_1280.png" />
        <Advantage imgSrc="https://science-corps.org/wp-content/uploads/2018/07/ScienceCorps_Logo_NoText-1.png" />
        <Advantage imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/46/English_icon_%28The_Noun_Project%29.png" />
        <Advantage imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/Viasat_History.png" />
      </div>
    </div>
  );
}
