import React from "react";
import useAppsData from "../hooks/useAppsData";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { appsData } = useAppsData();

  return (
    <div className="container mx-auto">
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Our All Applications</h1>
        <p className="mt-5 text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 px-4">
        {appsData.map((card) => (
          <AppCard key={card.id} card={card}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
