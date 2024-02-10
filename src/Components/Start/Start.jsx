import React from "react";
import logo from "../../Assets/imgs/avataaars.svg";
export default function Start() {
  return (
    <>
     <div className="bg-start">
       <div className="d-flex flex-column align-items-center justify-content-center vh-100">
         <div className="img">
           <img src={logo} alt="" className="w-100" />
         </div>
         <h2 className="text-white my-5 fs-1 fw-bolder">START FRAMEWORK</h2>
         <h6 className="text-white">Graphic Artist - Web Designer - Illustrator</h6>
       </div>
     </div>
    </>
  );
}
