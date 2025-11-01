import React, { useEffect, useState } from "react";
import InstallationCard from "../Components/InstallationCard";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState("none");

  console.log(installed);

  useEffect(() => {
    const installedApp = JSON.parse(localStorage.getItem("installedList"));
    installedApp && setInstalled(installedApp);
  }, []);

  const handleUninstall = (id) => {
    alert("Uninstalling...");
    const existingInstalledApps = JSON.parse(
      localStorage.getItem("installedList")
    );

    const updatedInstalledAppsList = existingInstalledApps.filter(
      (App) => App.id !== id
    );

    setInstalled(updatedInstalledAppsList);

    localStorage.setItem(
      "installedList",
      JSON.stringify(updatedInstalledAppsList)
    );
  };

  const handleSort = (() => {
    if (sort === "low-high") {
      return [...installed.sort((a, b) => a.downloads - b.downloads)];
    } else if (sort === "high-low") {
      return [...installed.sort((a, b) => b.downloads - a.downloads)];
    } else {
      return installed;
    }
  })();

  return (
    <div className="bg-base-200 pb-10">
      <div className="container mx-auto min-h-screen">
        <div className="text-center py-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Your Installed Apps
          </h1>
          <p className="mt-5 text-gray-500">
            Explore All the Apps You have Installed.
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center px-4 lg:px-10">
            <h3 className=" mb-2 text-xl font-semibold">
              ({!installed ? "0" : `${installed.length}`}) Apps found
            </h3>
            <label className="form-control md:w-full max-w-xs mb-4 ">
              <select
                className="select select-bordered"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                name=""
                id=""
              >
                <option value="none">Sort by Downloads</option>
                <option value="low-high">Downloads: Low - High</option>
                <option value="high-low">Downloads: High - Low</option>
              </select>
            </label>
          </div>

          <div className="space-y-5 px-4 Py-10">
            {installed &&
              handleSort.map((App) => (
                <InstallationCard
                  key={App.id}
                  App={App}
                  handleUninstall={handleUninstall}
                >
                  {" "}
                </InstallationCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
