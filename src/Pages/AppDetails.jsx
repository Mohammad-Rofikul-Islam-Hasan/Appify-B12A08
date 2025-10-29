import React from "react";
import useAppsData from "../hooks/useAppsData";
import { useParams } from "react-router";
import Spinner from "../Components/Spinner";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { appsData, loading } = useAppsData();
  const params = useParams();

  const findApp = appsData.find((app) => app.id === Number(params.id));

  if (loading) return <Spinner></Spinner>;

  const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = findApp;

  return (
    <div className="bg-base-100 container mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10">
        <div className="lg:w-5/12 ">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-3">
          <div className="lg:flex-1 space-y-5 w-full">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500">
              Develop by:{" "}
              <span className="text-[#9F62F2] font-bold">{companyName}</span>
            </p>
            <hr className="text-gray-500 mb-5" />
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col justify-center items-center">
              <img src={downloadIcon} alt="" />
              <p className="">Downloads</p>
              <h3 className="text-2xl font-bold">{downloads / 1000000}M</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={ratingIcon} alt="" />
              <p className="">Average Ratings</p>
              <h3 className="text-2xl font-bold">{ratingAvg}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={reviewIcon} alt="" />
              <p className="">Reviews</p>
              <h3 className="text-2xl font-bold">{reviews / 1000000}M</h3>
            </div>
          </div>
          <button className="btn btn-success text-lg text-white">
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <hr className="text-gray-500 my-10" />

      {/* Ratings  */}
      <div>
        <h1 className="text-3xl font-bold">Ratings</h1>
        <div className="mt-5 w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" className="" data={ratings}>
              <XAxis type="number" />
              <YAxis reversed dataKey="name" type="category" stroke="#8884d8" />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="count" fill="#ff8811" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className="text-gray-500 my-10" />
      <div className="pb-10 space-y-5">
        <h3 className="text-2xl font-bold text-justify">Description:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
