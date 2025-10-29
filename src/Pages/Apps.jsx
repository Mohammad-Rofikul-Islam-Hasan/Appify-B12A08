import React, { useState } from "react";
import useAppsData from "../hooks/useAppsData";
import AppCard from "../Components/AppCard";
import AppsNotFound from "../Components/AppsNotFound";
import Spinner from "../Components/Spinner";

const Apps = () => {
  const { appsData,loading } = useAppsData();
  const [search, setSearch] = useState("");

      if (loading) return <Spinner></Spinner>;

  const searchedText = search.trim().toLocaleLowerCase();

  const searchedApps = searchedText
    ? appsData.filter((App) =>
        App.title.toLocaleLowerCase().includes(searchedText)
      )
    : appsData;



  return (
    <div className="bg-base-200">
      <div className="container mx-auto ">
        <div className="text-center py-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our All Applications
          </h1>
          <p className="mt-5 text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center px-4 lg:px-10">
          <h3 className=" mb-2 text-xl font-semibold">
            {" "}
            Apps found ({searchedApps.length})
          </h3>
          <div className="mb-2">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                className="grow"
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 px-4">
          {searchedApps.map((card) => (
            <AppCard key={card.id} card={card}></AppCard>
          ))}
        </div>
        <div>{searchedApps.length === 0 && <AppsNotFound></AppsNotFound>}</div>
      </div>
    </div>
  );
};

export default Apps;
