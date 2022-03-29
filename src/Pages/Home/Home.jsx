import React from 'react';
import AllTutors from '../../Components/Home/AllTutors/AllTutors';
import Banner from '../../Components/Home/Banner/Banner';
import FindTutor from '../../Components/Home/FindTutor/FindTutor';
import AppBar from '../../Components/Shared/AppBar/AppBar';


const Home = () => {
    return (
        <div>
            <AppBar />
            <Banner />
            <FindTutor />
            <AllTutors />
        </div>
    );
};

export default Home;