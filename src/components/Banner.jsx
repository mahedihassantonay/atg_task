import React, { useState } from "react";
import layer from "../assets/banner-layer.png";
import bg from "../assets/banner.png";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "./Modal";

const Banner = () => {
   
 
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "440px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="position-relative img-fluid"
    >
      <img
        style={{ height: "440px" }}
        className="img-fluid"
        src={layer}
        alt=""
      />
      <div
        style={{ marginLeft: "20px", marginBottom: "20px" }}
        className="position-absolute bottom-0 text-white text-sm-start"
      >
        <h1 className="">Computer Enginnering</h1>
        <h3 className="fs-4  text-white-50">
          142,765 Computer Engineers follow this
        </h3>
      </div>
      <button
        className="d-lg-none btn btn-dark bg-transparent position-absolute top-0 end-0 mt-2 me-2 "
        type="button"
           
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
        
            
      >
        Join Group
      </button>

      <button className="d-lg-none btn btn-dark bg-transparent position-absolute top-0 start-0 ms-2 mt-2 ">
        <FaArrowLeft />
      </button>

      <Modal />
    </div>
  );
};

export default Banner;
