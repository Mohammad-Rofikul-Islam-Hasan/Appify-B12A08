import React from "react";

const States = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-medium mb-2">Total Downloads</p>
              <h3 className="text-4xl md:text-5xl font-extrabold">29.6M</h3>
              <p className="text-sm text-indigo-100 mt-2">
                21% More Than Last Month
              </p>
            </div>
            <div>
              <p className="text-lg font-medium mb-2">Total Reviews</p>
              <h3 className="text-4xl md:text-5xl font-extrabold">906K</h3>
              <p className="text-sm text-indigo-100 mt-2">
                46% More Than Last Month
              </p>
            </div>
            <div>
              <p className="text-lg font-medium mb-2">Active Apps</p>
              <h3 className="text-4xl md:text-5xl font-extrabold">132+</h3>
              <p className="text-sm text-indigo-100 mt-2">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
