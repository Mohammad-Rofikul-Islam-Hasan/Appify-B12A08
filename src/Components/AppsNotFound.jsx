import React from "react";
import notFoundImg from "../assets/App-Error.png";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const AppsNotFound = () => {
  return (
    <div className="pb-10 bg-base-200">
      <div className="hero container mx-auto min-h-[calc(100vh-225px)] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="w-3/4 mx-auto" src={notFoundImg} alt="" />
            <h1 className="text-3xl py-5 font-bold">Oops, Apps not found!</h1>
            <p className="py-6">
              The App you are requesting is not found on our system. please try
              another apps.
            </p>
            <Link
              to="/"
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
            >
              {" "}
              <ArrowLeft /> Go Back!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsNotFound;
