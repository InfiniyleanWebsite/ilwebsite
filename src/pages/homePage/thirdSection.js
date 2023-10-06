import React, { useState } from "react";

const options = [
  "personal attention",
  "india's top faculty",
  "focused doubt resolution",
  "best study resource",
  "rigorous study plan",
];
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    setLeft(index * 200);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div className=" bg-white text-black  ">
        <div className=" h-full mt-1 flex items-center relative">
          {data.map((tab, index) => (
            <span
              key={index}
              className={`h-full px-1 text-center text-base cursor-pointer   mt-2 justify-center items-center 
              ${selectedTab == index ? " text-black" : ""}  `}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 200 }}
            >
              {tab}
            </span>
          ))}
          <span
            className=" border-b-2   border-blue-500 text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500  mt-2"
            style={{ left, height: 30, width: 190 }}
          ></span>
        </div>
      </div>
    </div>
  );
};

function ThirdSection() {
  const [selectedOption, setSelectedOption] = useState(0);

  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const handleClick = (index) => {
    setSelectedOption(index);
  };

  const borderPosition = {
    transform: `translateX(-${(100 / options.length) * selectedOption}%)`,
  };

  return (
    <div className="items-center min-h-screen py-16 bg-white">
      <div className="w-[70%] max-w-[1000px] mx-auto flex flex-col">
        <div className="flex justify-evenly mb-10 space-x-16 w-full h-max relative">
          <SwitchTabs data={options} onTabChange={onTabChange} />
        </div>
      </div>
      <div className="flex w-[1250px] mx-auto justify-between pr-32 items-center rowww">
        <img
          src="./thirdSection.svg"
          height={600}
          width={600}
          alt="thirdSection"
          className="my-image"
        />

        <div className="flex flex-col">
          <div className="text-4xl text-black font-bold">focused</div>
          <div className="text-4xl text-blue-500 mb-5 font-bold">guidance</div>
          <div className="text-xl text-black font-thin">
            Experience tailored guidance designed to cater to unique learning
            needs. We ensure every student receives the individual attention
            they deserve.
          </div>
          <button className="text-white h-10 hover:space-x-2 w-60 hover:bg-blue-600 mt-8 bg-blue-500 rounded-2xl">
            <div>
              start learning for free <span>&#8599;</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
