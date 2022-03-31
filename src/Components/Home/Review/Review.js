import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1223,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 772,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className="reviewBackground">
      <div className="container py-5">
        <div className="reviewText"
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
          <div className="d-flex">
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
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div>
              <div className="card p-5 text-start m-3  rounded">
                <div className="d-flex">
                  <h3 className="me-5 fs-2 text-warning">
                    <FaQuoteLeft />
                  </h3>

                  <div className="pt-3">
                    <h6>Our clients said about our clients said about</h6>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus sit accusamus beatae facilis, harum sapiente
                      nihil placeat nostrum aut adipisci.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        width="64px"
                        height="64px"
                        src="https://i.ibb.co/gD5syyh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.webp"
                        alt=""
                      />
                      <div className="ps-4 text-start">
                        <h6>Md Sakib</h6>
                        <p>Product designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="card p-5 text-start m-3  rounded">
                <div className="d-flex">
                  <h3 className="me-5 fs-2 text-warning">
                    <FaQuoteLeft />
                  </h3>

                  <div className="pt-3">
                    <h6>Our clients said about our clients said about</h6>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus sit accusamus beatae facilis, harum sapiente
                      nihil placeat nostrum aut adipisci.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        width="64px"
                        height="64px"
                        src="https://i.ibb.co/gD5syyh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.webp"
                        alt=""
                      />
                      <div className="ps-4 text-start">
                        <h6>Md Sakib</h6>
                        <p>Product designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="card p-5 text-start m-3  rounded">
                <div className="d-flex">
                  <h3 className="me-5 fs-2 text-warning">
                    <FaQuoteLeft />
                  </h3>

                  <div className="pt-3">
                    <h6>Our clients said about our clients said about</h6>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus sit accusamus beatae facilis, harum sapiente
                      nihil placeat nostrum aut adipisci.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        width="64px"
                        height="64px"
                        src="https://i.ibb.co/gD5syyh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.webp"
                        alt=""
                      />
                      <div className="ps-4 text-start">
                        <h6>Md Sakib</h6>
                        <p>Product designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="card p-5 text-start m-3  rounded">
                <div className="d-flex">
                  <h3 className="me-5 fs-2 text-warning">
                    <FaQuoteLeft />
                  </h3>

                  <div className="pt-3">
                    <h6>Our clients said about our clients said about</h6>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus sit accusamus beatae facilis, harum sapiente
                      nihil placeat nostrum aut adipisci.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        width="64px"
                        height="64px"
                        src="https://i.ibb.co/gD5syyh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.webp"
                        alt=""
                      />
                      <div className="ps-4 text-start">
                        <h6>Md Sakib</h6>
                        <p>Product designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="card p-5 text-start m-3  rounded">
                <div className="d-flex">
                  <h3 className="me-5 fs-2 text-warning">
                    <FaQuoteLeft />
                  </h3>

                  <div className="pt-3">
                    <h6>Our clients said about our clients said about</h6>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus sit accusamus beatae facilis, harum sapiente
                      nihil placeat nostrum aut adipisci.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        width="64px"
                        height="64px"
                        src="https://i.ibb.co/gD5syyh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.webp"
                        alt=""
                      />
                      <div className="ps-4 text-start">
                        <h6>Md Sakib</h6>
                        <p>Product designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="card p-5 text-start m-3  rounded">
                <div className="d-flex">
                  <h3 className="me-5 fs-2 text-warning">
                    <FaQuoteLeft />
                  </h3>

                  <div className="pt-3">
                    <h6>Our clients said about our clients said about</h6>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus sit accusamus beatae facilis, harum sapiente
                      nihil placeat nostrum aut adipisci.
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        width="64px"
                        height="64px"
                        src="https://i.ibb.co/gD5syyh/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.webp"
                        alt=""
                      />
                      <div className="ps-4 text-start">
                        <h6>Md Sakib</h6>
                        <p>Product designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Review;
