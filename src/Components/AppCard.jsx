import React from "react";
import { ArrowDownToLine, Star } from "lucide-react";

const AppCard = ({ card }) => {
  const { image, title, companyName, ratingAvg, downloads } = card;
  return (
    <div>
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
            <button className="btn bg-green-50 text-green-500 text-xl  font-bold">
              <ArrowDownToLine /> {downloads / 1000000}M
            </button>
            <button className="btn bg-amber-50 text-orange-300 text-xl font-bold">
              <Star /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
