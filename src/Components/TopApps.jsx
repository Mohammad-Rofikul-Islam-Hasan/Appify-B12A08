import { ArrowDownToLine, Star } from "lucide-react";
import React from "react";
import useAppsData from "../hooks/useAppsData";
import AppCard from "./AppCard";
import { Link } from "react-router";

const TopApps = () => {
  const { appsData } = useAppsData();

  const topAppsData = appsData.slice(0,8)

  console.log(appsData);

  return (
    <div className="bg-base-200">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-5xl font-bold">Trending Apps</h1>
          <p className="mt-5 text-gray-500">
            Explore All Trending Apps on the Market developed by us.
          </p>
        </div>

        <div className="px-4 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topAppsData.map((card) => (
            <AppCard key={card.id} card={card}></AppCard>
          ))}
        </div>
        <Link to="/apps" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mb-10">Show All</Link>
      </div>
    </div>
  );
};

export default TopApps;
