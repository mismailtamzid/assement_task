import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const LatestBlog = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  return (
    <div className="">
      <div className="container py-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <h1 className="py-5 text-start">
            Our clients <br />
            said about our service
          </h1>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 40,
                backgroundColor: "aliceblue",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
                borderRadius: 20,
                boxShadow: "0 1px 3px rgb(0 0 0 /10%)",
                cursor: "pointer",
              }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <IoIosArrowBack />
            </div>
            <div
              style={{
                width: 40,
                backgroundColor: "aliceblue",
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
                borderRadius: 20,
                boxShadow: "0 1px 3px rgb(0 0 0 /10%)",
                cursor: "pointer",
              }}
              onClick={() => sliderRef.current.slickNext()}
            >
              {" "}
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="cards">
          <Slider ref={sliderRef} slidesToShow={3}>
            <div>
              <div className="blogCard card1 p-4 text-start text-light m-5 rounded d-flex align-items-end">
                <div>
                  {" "}
                  <h5 className="fw-normal ">Product designer</h5>
                   <h3 className="fs-6">
                    Our clients said about our service. <br />
                    said about our service
                   </h3> 
                  <button className="btn btn-warning text-light ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="blogCard card2 p-4 text-start text-light m-5 rounded d-flex align-items-end">
                <div>
                  <h5 className="fw-normal ">Product designer</h5>
                   <h3 className="fs-6">
                    Our clients said about our service. <br />
                    said about our service
                   </h3> 
                </div>
              </div>
            </div>
            <div>
              <div className="blogCard card3 p-4 text-start text-light m-5 rounded d-flex align-items-end">
                <div>
                  {" "}
                  <h5 className="fw-normal ">Product designer</h5>
                   <h3 className="fs-6">
                    Our clients said about our service. <br />
                    said about our service
                   </h3> 
                </div>
              </div>
            </div>
            <div>
              <div className="blogCard card1 p-4 text-start text-light m-5 rounded d-flex align-items-end">
                <div>
                  {" "}
                  <h5 className="fw-normal ">Product designer</h5>
                   <h3 className="fs-5">
                    Our clients said about our service. <br />
                    said about our service
                   </h3> 
                  <button className="btn btn-warning text-light ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="blogCard card2 p-4 text-start text-light m-5 rounded d-flex align-items-end">
                <div>
                  {" "}
                  <h5 className="fw-normal ">Product designer</h5>
                   <h3 className="fs-5">
                    Our clients said about our service. <br />
                    said about our service
                   </h3> 
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
