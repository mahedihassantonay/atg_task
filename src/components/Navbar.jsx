import logo from "../assets/logo.png";
import { GoSearch } from "react-icons/go";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <div style={{ height: "72px" }} className="p-4  d-none d-lg-block">
      <div class="d-flex justify-content-between align-items-center ">
        <img
          style={{ width: "162.57px", height: "24px" }}
          className=""
          src={logo}
          alt=""
        />
        <div>
          <input
            style={{ backgroundColor: "#F2F2F2", width: "360px" }}
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder=" Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </div>
        <div className="fs-5 fw-bold d-flex align-items-center">
          <span>Create account.</span>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"

          >
            It's free
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Navbar;
