import React from 'react';
import { BsFacebook, BsTwitter, BsVimeo, BsYoutube } from "react-icons/bs";


const Footer = () => {
    return (
      <div className="container my-5">
        <div className=" d-flex align-items-center justify-content-between mt-5">
          <div className="footer d-flex ">
            <p className="text-bold mx-4 fs-5 fw-bold">About us</p>
            <p className="text-bold mx-4 fs-5 fw-bold">Discover</p>
            <p className="text-bold mx-4 fs-5 fw-bold">Explore</p>
            <p className="text-bold mx-4 fs-5 fw-bold">Books</p>
          </div>
          <div className="d-flex justify-content-between">
            <BsFacebook className="mx-3" />
            <BsTwitter className="mx-3" />
            <BsVimeo className="mx-3" />
            <BsYoutube className="mx-3" />
          </div>
        </div>
        <hr />
        <div>
          <div className="d-flex align-items-center justify-content-between mt-5">
            {" "}
            <p className='fs-5'>&copy;2021 e-tutor All rights reserved </p>
            <div className="d-flex">
              <p className="mx-3 fs-5">Terms of Service</p>
              <p className='fs-5'>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;