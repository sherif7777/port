import React, { useState } from "react";
import port1 from "../../Assets/imgs/poert1.png";
import port2 from "../../Assets/imgs/port2.png";
import port3 from "../../Assets/imgs/port3.png";
import Card from "../Card/Card";

export default function Portfolio() {
  let [selectedImage, setselectedImage] = useState(null);

  const myItems = [
    { id: 1, image: port1 },
    { id: 2, image: port2 },
    { id: 3, image: port3 },
    { id: 4, image: port1 },
    { id: 5, image: port2 },
    { id: 6, image: port3 },
  ];

  function openModal(img) {
    setselectedImage(img);
  }

  function closeModal() {
    setselectedImage(null);
  }

  return (
    <>
      <div className="position-relative">
        <div className="container">
          <div className="header text-center pt-4 ">
            <h1 className="fw-bolder">PORTFOLIO COMPONENT</h1>
          </div>

          <div className="row g-5 mb-5 ">
            {myItems.map((item) => (
              <Card
                key={item.id}
                fun={() => openModal(item.image)}
                img={item.image}
              />
            ))}
          </div>
        </div>
        {selectedImage ? (
          <div
            onClick={function () {
              closeModal();
            }}
            className="d-flex justify-content-center align-items-center layer position-absolute top-0 start-0 end-0 bottom-0"
          >
            <div>
              <img src={selectedImage} alt="" width={700} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
