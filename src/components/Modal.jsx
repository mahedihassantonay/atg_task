import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import facebook from "../assets/fb.png";
import google from "../assets/google.png";
import loginImage from "../assets/loginImage.png";

const Modal = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle);
    }
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#EFFFF4", color: "#008A45" }}
            >
              <h5 className="modal-title fs-6 fw-bold" id="staticBackdropLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-between align-items-center gap-5 mt-4 mb-5">
              {
                toggle ? 
                <>
                    <div className="w-50 ">
                <h2 className="fw-bold"> Sign In</h2>
                <form className="d-flex flex-column w-100">
                  {/* <div className="d-flex">
                    <input
                      style={{ backgroundColor: "#D9D9DB" }}
                      className="border-end-0 w-50 p-2"
                      type="text"
                      name=""
                      id=""
                      placeholder="First Name"
                    />
                    <input
                      style={{ backgroundColor: "#D9D9DB" }}
                      className="p-2"
                      type="text"
                      name=""
                      id=""
                      placeholder="Last Name"
                    />
                  </div> */}

                  <input
                    style={{ backgroundColor: "#D9D9DB" }}
                    className="  p-4"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />

                  <div className="position-relative">
                    <input
                      style={{ backgroundColor: "#D9D9DB" }}
                      className="border-top-0 p-4 w-100"
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                    />
                    <IoEyeOutline
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  {/* <input
                    style={{ backgroundColor: "#D9D9DB" }}
                    className=" border-top-0 p-2"
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                  /> */}

                  <button className="btn btn-primary mt-4 rounded-5">
                    Sign In
                  </button>
                </form>

                <button className="btn w-100 border rounded-2 mt-4">
                  <img className="p-2" src={facebook} />
                </button>
                <button className="btn w-100 border rounded-2 mt-2">
                  <img className="p-2" src={google} />
                </button>
              </div>

              <div className="w-50">     
                <div className="d-flex align-items-center">
                <h5 className="fs-6 mt-2">
                  Don’t have an account yet? 
                  
                </h5>
                <button
                    // type="button"
                    className="fs-6 color-blue border-0 pointer"

                    // data-bs-toggle="modal"
                    // data-bs-target="#staticBackdrop"
                    onClick={handleToggle}
                  >
                    Create new for free!
                  </button>
                </div>
                <img src={loginImage} alt="" />
                <h6>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </h6>
              </div>
                </>

                :
                <>
                <div className="w-50">
                <h2 className="fw-bold">Create Account</h2>
                <form className="d-flex flex-column w-100">
                  <div className="d-flex">
                    <input
                      style={{ backgroundColor: "#D9D9DB" }}
                      className="border-end-0 w-50 p-2"
                      type="text"
                      name=""
                      id=""
                      placeholder="First Name"
                    />
                    <input
                      style={{ backgroundColor: "#D9D9DB" }}
                      className="p-2"
                      type="text"
                      name=""
                      id=""
                      placeholder="Last Name"
                    />
                  </div>

                  <input
                    style={{ backgroundColor: "#D9D9DB" }}
                    className=" border-top-0 p-2"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />

                  <div className="position-relative">
                    <input
                      style={{ backgroundColor: "#D9D9DB" }}
                      className="border-top-0 p-2 w-100"
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                    />
                    <IoEyeOutline
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <input
                    style={{ backgroundColor: "#D9D9DB" }}
                    className=" border-top-0 p-2"
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                  />

                  <button className="btn btn-primary mt-4 rounded-5">
                    Create Account
                  </button>
                </form>

                <button className="btn w-100 border rounded-2 mt-4">
                  <img className="p-2" src={facebook} />
                </button>
                <button className="btn w-100 border rounded-2 mt-2">
                  <img className="p-2" src={google} />
                </button>
              </div>

              <div className="w-50">
                <div className="d-flex align-items-center gap-1">
                <h5>
                  Already have an account?
                  
                </h5>
                <button
                    type="button"
                    className="btn btn-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#staticBackdrop"
                    onClick={handleToggle}
                  >
                    Sign In
                  </button>
                </div>
                <img src={loginImage} alt="" />
                <h6>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </h6>
              </div>
                
                </>
              }
            </div>

            {/* <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div> */}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Modal;
