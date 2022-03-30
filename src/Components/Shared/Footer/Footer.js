import React from 'react';
import { BsFacebook, BsTwitter, BsVimeo, BsYoutube } from "react-icons/bs";


const Footer = () => {
    return (
      <div className="container ">
        <div className="footer d-flex align-items-center justify-content-between mt-5">
          <ul type="none" className="footerText d-flex text-bold  fs-5 fw-bold">
            <li className="me-4">About us</li>
            <li className="mx-4">Discover</li>
            <li className="mx-4">something</li>
            <li className="mx-4">Books</li>
          </ul>
          <div>
            <ul
              type="none"
              className="footerText2 d-flex text-bold  fs-5 fw-bold"
            >
              <li>
                <BsFacebook className="mx-3" />
              </li>
              <li>
                {" "}
                <BsTwitter className="mx-3" />
              </li>
              <li>
                {" "}
                <BsVimeo className="mx-3" />
              </li>
              <li>
                {" "}
                <BsYoutube className="mx-3" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <div className="d-flex align-items-center justify-content-between mt-5">
            {" "}
            <p className="fs-5">&copy;2021 e-tutor All rights reserved </p>
            <ul type="none" className="privacy d-flex">
              <li className="mt-2 mx-5 fs-5">Terms of Service</li>
              <li className="fs-5 mt-2">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;