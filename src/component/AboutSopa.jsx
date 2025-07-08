import React from "react";

function AboutSopa() {
  return (
    <>
      <div className="w-[85%] m-auto py-[8rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className=" pb-1 border-b-2 inline border-amber-400">
              About SOPA
            </h1>
            <h1 className=" my-3 font-bold text-xl ">The story of <span className="text-amber-400">SOPA</span></h1>
            <p className="text-[14px] leading-7">
              The Soybean Processors Association of India, popularly known as
              SOPA, is the only national level body representing the soybean
              processors, farmers, exporters and brokers in India working
              towards the aim to strengthen soybeans as a viable crop.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="h-[22rem] w-5xl object-cover rounded-2xl rounded-br-[6rem]"
              src="middleImg.png"
              alt="buildingImg" 
            />
          </div>

          <div className="relative flex flex-col justify-center items-center">
            <div className="bg-white rounded-[50%] p-1 md:absolute top-[-12rem] left-[-5rem] ">
              <img
                className="rounded-[50%] w-[12rem]"
                src="topImg.png"
                alt="eventsSopaImg"
              />
            </div>

            <div className="">
              <div className="lg:ml-[25%] mb-4">
                <h1 className="inline border-b-2 border-amber-400 text-2xl">
                  Events
                </h1>
                <h2 className="font-semibold text-2xl">Upcoming Events</h2>
              </div>

              <p className="text-[14px] leading-7 lg:pl-4">
                The Soybean Processors Association of India, popularly known as
                SOPA, is the only national level body representing the soybean
                processors, farmers, exporters and brokers in India working
                towards the aim to strengthen soybeans as a viable crop.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="relative  flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
          <div>
            <img src="bottomImg.png" alt="Sopa Logo" className="md:absolute md:left-[15%] md:top-[-5rem] rounded-2xl bg-white p-1" />
          </div>

          <div className="md:absolute right-0 top-[10%] md:w-[50%]">
            <h2 className="text-xl font-bold text-left pb-3">Function of <span className="text-amber-400">SOPA</span> </h2>
            <p className="text-[14px] leading-7 text-left">
              The Soybean Processors Association of India, popularly known as
              SOPA, is the only national level body representing the soybean
              processors, farmers, exporters and brokers in India working
              towards the aim to strengthen soybeans as a viable crop.
            </p>
          </div> 
        </div>
      </div>
    </>
  );
}

export default AboutSopa;
