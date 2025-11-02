import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="hero container mx-auto min-h-[calc(100vh-225px)] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img className="w-3/4 mx-auto" src={errorImg} alt="" />
            <h1 className="text-3xl py-5 font-bold">Oops, page not found!</h1>
            <p className="py-6">
              The page you are looking for is not available.
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

export default ErrorPage;
