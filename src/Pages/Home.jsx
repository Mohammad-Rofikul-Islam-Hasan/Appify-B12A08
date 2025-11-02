import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import States from "../Components/States";
import TopApps from "../Components/TopApps";
import useAppsData from "../hooks/useAppsData";
import Spinner from "../Components/Spinner";

const Home = () => {
  const { loading } = useAppsData();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showSpinner) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TopApps></TopApps>
    </div>
  );
};

export default Home;
