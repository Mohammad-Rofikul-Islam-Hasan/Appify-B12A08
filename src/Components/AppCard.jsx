import React from "react";
import { ArrowDownToLine, Star } from "lucide-react";
import ratingIcon from "../assets/icon-ratings.png";
import downloadIcon from "../assets/icon-downloads.png";
import { Link } from "react-router";

const AppCard = ({ card}) => {
  const {id, image, title, companyName, ratingAvg, downloads } = card;
    
  

  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure className="px-5 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title h-full">
            {title}
            <br /> - by {companyName}{" "}
          </h2>
          <div className="w-full flex justify-between">
            <button className="btn bg-green-50 text-green-500 ">
              <img className="w-5" src={downloadIcon} alt="" />
              {downloads / 1000000}M
            </button>
            <button className="btn bg-amber-50 text-orange-300 ">
              <img className="w-5" src={ratingIcon} alt="" /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
