import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import TopApps from '../Components/TopApps';

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <States></States>
       <TopApps></TopApps>
    </div>
  );
};

export default Home;