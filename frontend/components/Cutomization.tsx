import React from "react";

const Customization = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-24 scroll-mt-10" id="customization">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h4 className="text-5xl font-bold text-black">Shirt Customization Studio</h4>
      </div>

      {/* Box Container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Left Box: Projects */}
        <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 shadow-lg rounded-xl w-full md:w-1/2 h-96">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-gray-500 rounded-full"></span>
            <span className="text-xs font-semibold uppercase text-gray-600">
              Projects
            </span>
          </div>

          <h3 className="text-5xl font-semibold text-gray-800 mt-4">150</h3>

          <div className="flex justify-center items-center gap-6 mt-4">
            <div className="text-green-600 flex items-center gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
              <span className="text-sm">1.7%</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-800">5</span>
              <span className="block text-sm text-gray-500">last week</span>
            </div>
          </div>
        </div>

        {/* Right Box: Successful Conversions */}
        <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 shadow-lg rounded-xl w-full md:w-1/2 h-96">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-green-500 rounded-full"></span>
            <span className="text-xs font-semibold uppercase text-gray-600">
              Successful Conversions
            </span>
          </div>

          <h3 className="text-5xl font-semibold text-gray-800 mt-4">25</h3>

          <div className="flex justify-center items-center gap-6 mt-4">
            <div className="text-green-600 flex items-center gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
              <span className="text-sm">5.6%</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-800">7</span>
              <span className="block text-sm text-gray-500">last week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
