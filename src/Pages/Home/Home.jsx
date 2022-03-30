import React from "react";
import AllTutors from "../../Components/Home/AllTutors/AllTutors";
import Banner from "../../Components/Home/Banner/Banner";
import Contact from "../../Components/Home/Contact/Contact";
import FindAllTutors from "../../Components/Home/FindAllTutors/FindAllTutors";
import LatestBlog from "../../Components/Home/LatestBlog/LatestBlog";
import Review from "../../Components/Home/Review/Review";
import Subscribe from "../../Components/Home/Subscribe/Subscribe";
import AppBar from "../../Components/Shared/AppBar/AppBar";
import Footer from "../../Components/Shared/Footer/Footer";

// https://ibb.co/MgkbrTt
// https://ibb.co/605RhQT
// https://ibb.co/TP57Ksp
const Home = () => {
  return (
    <div>
      <AppBar />
      <Banner />
      <FindAllTutors />
      <AllTutors />
      <Contact />
      <Review />
      <LatestBlog />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
