import React from 'react';
import bannerImage from "./../../../Assets/images/Illustration.png"


const Banner = () => {
    return (
      <div className="banner d-flex align-items-center">
        {" "}
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="col-md-6">
              <h1 className="title bannerTitle ">
                Find private <br />
                tutors for kids
              </h1>
              <p className="bannerText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam molestias dignissimos minima! Dolore, velit corrupti?
              </p>
              <button className="bannerButton">Find Tutor Now</button>
            </div>
            <div className="col-md-6">
              {" "}
              <img
                src={bannerImage}
                alt=""
                width="762.97px"
                height="482.39px"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;