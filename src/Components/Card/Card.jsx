import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="inner position-relative" onClick={props.fun}>
          <img src={props.img} alt="" className="w-100" />
          <div className="cover d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 ">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
}
