import React from "react";
import Body from "./Body";
import articleBanner from "../assets/article.png";
import articleIcon from "../assets/articleIcon.png";
import articleUser from "../assets/articleUser.png";
import { TiEyeOutline } from "react-icons/ti";
import { CiShare2 } from "react-icons/ci";
import educationBanner from "../assets/education.png";
import eduIcon from "../assets/eduIcon.png";
import eduUser from "../assets/eduUser.png";
import meetupBanner from "../assets/meetup.png";
import meetupIcon from "../assets/meetupIcon.png";
import meetupUser from "../assets/meetupUser.png";
import jobIcon from "../assets/jobIcon.png";
import jobUser from "../assets/jobUser.png";
import { GoBriefcase } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEdit } from "react-icons/md";
import { FiInfo } from "react-icons/fi";



const Blogs = () => {
  return (
    <Body>
        <div className="d-flex justify-content-between gap-4">

        <div  className="w-100">
        {/* 1 */}
        <div className="mt-4 border rounded-4">
          <img src={articleBanner} alt="" className="w-100" />
          <div className="mt-4 p-3">
            <img src={articleIcon} alt="" />

            <div className="d-flex justify-content-between ">
              <h2 className="mt-3">
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h2>
              <div className="dropdown">
                <a
                  className="btn fs-1 "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  ...
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      option
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h4 className="mt-3 text-black-50">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </h4>

            <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex gap-3 align-items-center">
                <img src={articleUser} alt="" className="rounded-circle" />
                <h4>Sarthak Karma</h4>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <span>
                  <TiEyeOutline /> 1.4k views
                </span>
                <button className="btn btn-secondary">
                  <CiShare2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="mt-4 border rounded-4">
          <img src={educationBanner} alt="" className="w-100" />
          <div className="mt-4 p-4">
            <img src={eduIcon} alt="" />

            <div className="d-flex justify-content-between">
              <h2 className="mt-3">
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </h2>
              <div className="dropdown">
                <a
                  className="btn fs-1 "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  ...
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      option
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h4 className="mt-3 text-black-50">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </h4>

            <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex gap-3 align-items-center">
                <img src={eduUser} alt="" className="rounded-circle" />
                <h4>Sarah West</h4>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <span>
                  <TiEyeOutline /> 1.4k views
                </span>
                <button className="btn btn-secondary">
                  <CiShare2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="mt-4 border rounded-4">
          <img src={meetupBanner} alt="" className="w-100" />
          <div className="mt-4 p-4">
            <img src={meetupIcon} alt="" />

            <div className="d-flex justify-content-between ">
              <h2 className="mt-3">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h2>
              <div className="dropdown">
                <a
                  className="btn fs-1 "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  ...
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      option
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <span>
                <SlCalender /> Fri, 12 Oct, 2018
              </span>
              <span>
                <FiMapPin /> Ahmedabad, India
              </span>
            </div>

            <button
              style={{ color: "#E56135" }}
              className="w-100 mt-4  border-0 rounded-3 p-2 fw-bold fs-4"
            >
              Visit Website
            </button>

            <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex gap-3 align-items-center">
                <img src={meetupUser} alt="" className="rounded-circle" />
                <h4>Ronal Jones</h4>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <span>
                  <TiEyeOutline /> 1.4k views
                </span>
                <button className="btn btn-secondary">
                  <CiShare2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ...4.... */}

        <div className="mt-4 border rounded-4">
          <div className="mt-4 p-4">
            <img src={jobIcon} alt="" />

            <div className="d-flex justify-content-between">
              <h2 className="mt-3">Software Developer</h2>
              <div className="dropdown">
                <a
                  className="btn fs-1 "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  ...
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      option
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <span>
                <GoBriefcase /> Innovaccer Analytics Private Ltd.
              </span>
              <span>
                <FiMapPin /> Noida, India
              </span>
            </div>

            <button
              style={{ color: "#02B875" }}
              className="w-100 mt-4  border-0 rounded-3 p-2 fw-bold fs-4"
            >
              Apply on Timesjobs
            </button>

            <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex gap-3 align-items-center">
                <img src={jobUser} alt="" className="rounded-circle" />
                <h4>Joseph Gray</h4>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <span>
                  <TiEyeOutline /> 1.4k views
                </span>
                <button className="btn btn-secondary">
                  <CiShare2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{width:"348px"}} className="d-none d-lg-block ">
        <div className="d-flex justify-content-between align-items-center">
            <span className="d-flex align-items-center gap-2 fw-bold"><FiMapPin />  Noida, India </span>
            
            <span><MdOutlineEdit /></span>
        </div>
        <hr />

        <span><FiInfo /> Your location will help us serve better and extend a personalised experience.</span>
      </div>
        </div>
    </Body>
  );
};

export default Blogs;
